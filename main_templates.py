import os
import re
import json
from openai import OpenAI

#       python3 -m venv myenv
#       source myenv/bin/activate
#       pip install openai
#       python main_templates.py checkins/retrospective.json

# API Key de OpenAI
OPENAI_API_KEY = "-"

# Cliente de OpenAI
client = OpenAI(api_key=OPENAI_API_KEY, timeout=10000)

# Directorios base y de salida
BASE_DIR = "./i18n"
OUTPUT_DIR = "./i18n_translated"

# Crear la carpeta de salida si no existe
os.makedirs(OUTPUT_DIR, exist_ok=True)


def translate_text(text, client, is_template=False):
    """Traduce un texto usando OpenAI, omitiendo las variables."""
    
    # Extraer variables del texto
    variables = re.findall(r'\${(.*?)}|{{(.*?)}}', text)
    placeholders = {}

    for i, var in enumerate(variables):
        placeholder = f"__VAR_{i}__"
        placeholders[placeholder] = var[0] if var[0] else var[1]
        text = text.replace(var[0] if var[0] else var[1], placeholder)

    print(f"Traduciendo el texto (sin variables): {text[:50]}...")

    # Crear el prompt para la API de OpenAI
    messages_prompt = [
        {
            "role": "system",
            "content": "You are a helpful assistant that translates text into French while keeping the JSON structure intact. Only translate the text inside the i18n field within extra_params and add the new translation under the corresponding language abbreviation (e.g., pt for Portuguese) at the bottom of that key. Do not modify any other part of the JSON."
        },
        {
            "role": "user",
            "content": text
        }
    ]

    try:
        response = client.chat.completions.create(
            model="gpt-4o-2024-08-06",
            messages=messages_prompt,
            temperature=0.7,
            n=1,
            user="translator-script"
        )
        translated = response.choices[0].message.content.strip()
        print(f"Texto traducido: {translated[:50]}...")
    except Exception as e:
        print(f"Error al traducir el texto: {e}")
        translated = None

    for placeholder, original_var in placeholders.items():
        translated = translated.replace(placeholder, original_var)

    return translated


def translate_json_file(file_path, client):
    """Traducir el contenido de un archivo .json."""
    print(f"Procesando archivo: {file_path}")
    with open(file_path, "r", encoding="utf-8") as file:
        content = json.load(file)

    content_str = json.dumps(content, ensure_ascii=False)  
    translated_str = translate_text(content_str, client)

    if not translated_str:
        print(f"Error: No se recibió respuesta de la API para {file_path}")
        return None

    # Eliminar posibles caracteres no deseados
    translated_str = translated_str.strip("```json").strip("```").strip()

    try:
        translated_content = json.loads(translated_str)  
    except json.JSONDecodeError as e:
        print(f"Error al decodificar JSON en {file_path}: {e}")
        print(f"Respuesta de la API: {translated_str}")
        return None

    print(f"Contenido traducido para: {file_path}")
    return translated_content



def process_file(file_path, output_dir, client):
    """Procesar un archivo específico .json."""
    if not os.path.exists(file_path):
        print(f"El archivo {file_path} no existe.")
        return
    
    translated_content = translate_json_file(file_path, client)
    if translated_content is not None:
        relative_path = os.path.relpath(file_path, BASE_DIR)
        output_path = os.path.join(output_dir, relative_path)
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        print(f"Guardando archivo traducido: {output_path}")
        with open(output_path, "w", encoding="utf-8") as output_file:
            json.dump(translated_content, output_file, ensure_ascii=False, indent=4)
        print(f"Archivo traducido guardado en: {output_path}")
    else:
        print(f"Error al procesar: {file_path}")

def process_directory(directory_path, output_dir, client):
    """Procesar todos los archivos .json dentro de un directorio."""
    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith(".json"):
                file_path = os.path.join(root, file)
                process_file(file_path, output_dir, client)

def main():
    """Función principal del script."""
    import argparse
    parser = argparse.ArgumentParser(description="Traducir archivo(s) .json usando OpenAI API.")
    parser.add_argument("path", help="Ruta de un archivo o directorio (ej. 'data/file.json' o 'data').")
    args = parser.parse_args()

    # Detectar si es un archivo o un directorio
    path = os.path.join(BASE_DIR, args.path)

    if os.path.isfile(path):
        print(f"Procesando archivo único: {path}")
        process_file(path, OUTPUT_DIR, client)
    elif os.path.isdir(path):
        print(f"Procesando todos los archivos en el directorio: {path}")
        process_directory(path, OUTPUT_DIR, client)
    else:
        print(f"La ruta especificada no existe: {path}")

    print("Traducción completada.")

if __name__ == "__main__":
    main()
