import os
import re
import json
from openai import OpenAI

# API Key de OpenAI
OPENAI_API_KEY = "-"

# Cliente de OpenAI
client = OpenAI(api_key=OPENAI_API_KEY, timeout=10000)

# Directorios de entrada y salida
BASE_DIR = "./i18n"
OUTPUT_DIR = "./i18n_translated"

# Crear la carpeta de salida si no existe
os.makedirs(OUTPUT_DIR, exist_ok=True)

def translate_text(text, client):
    """Traducir un texto usando OpenAI, omitiendo las variables."""
    # Expresión regular para encontrar variables dentro del texto (esto puede ajustarse según tu caso)
    variables = re.findall(r'\${(.*?)}|{{(.*?)}}', text)
    # Sustituir las variables por marcadores de posición temporales
    placeholders = {}
    for i, var in enumerate(variables):
        placeholder = f"__VAR_{i}__"
        placeholders[placeholder] = var[0] if var[0] else var[1]  # Obtener el valor de la variable
        text = text.replace(var[0] if var[0] else var[1], placeholder)
    
    print(f"Traduciendo el texto (sin variables): {text[:50]}...")  # Mostrar una pequeña porción del texto sin variables

    # Enviar el texto para traducir
    messages_prompt = [
        {
            "role": "system",
            "content": "You are a helpful assistant that translates English to Spanish."
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
        print(f"Texto traducido: {translated[:50]}...")  # Mostrar una pequeña porción del texto traducido
    except Exception as e:
        print(f"Error al traducir el texto: {e}")
        translated = None

    # Sustituir los marcadores de posición por las variables originales
    for placeholder, original_var in placeholders.items():
        translated = translated.replace(placeholder, original_var)

    return translated

def translate_ts_file(file_path, client):
    """Leer y traducir un archivo .ts."""
    print(f"Procesando archivo: {file_path}")

    # Leer el archivo .ts
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()

    # Traducir el contenido
    translated_content = translate_text(content, client)

    if translated_content is None:
        print(f"No se pudo traducir el archivo: {file_path}")
        return None

    print(f"Contenido traducido para: {file_path}")
    return translated_content

def process_file(file_path, output_dir, client):
    """Procesar un archivo específico .ts."""
    if not os.path.exists(file_path):
        print(f"El archivo {file_path} no existe.")
        return

    # Traducir archivo
    translated_content = translate_ts_file(file_path, client)

    if translated_content is not None:
        # Crear la ruta de salida
        relative_path = os.path.relpath(file_path, BASE_DIR)
        output_path = os.path.join(output_dir, relative_path)

        # Crear directorio de salida si no existe
        os.makedirs(os.path.dirname(output_path), exist_ok=True)

        # Guardar archivo traducido
        print(f"Guardando archivo traducido: {output_path}")
        with open(output_path, "w", encoding="utf-8") as output_file:
            output_file.write(translated_content)
        print(f"Archivo traducido guardado en: {output_path}")
    else:
        print(f"Error al procesar: {file_path}")

def main():
    """Función principal del script."""
    # Argumentos de línea de comandos
    import argparse
    parser = argparse.ArgumentParser(description="Traducir archivo .ts usando OpenAI API.")
    parser.add_argument("file", help="Ruta del archivo .ts a traducir (ej. 'web/agents.ts').")
    args = parser.parse_args()

    # Ruta del archivo específico
    file_path = os.path.join(BASE_DIR, args.file)

    print(f"Iniciando traducción del archivo: {file_path}")
    process_file(file_path, OUTPUT_DIR, client)
    print("Traducción completada.")

if __name__ == "__main__":
    main()
