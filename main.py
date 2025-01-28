import os
import re
import json
from openai import OpenAI

# API Key de OpenAI
OPENAI_API_KEY = ""

# Cliente de OpenAI
client = OpenAI(api_key=OPENAI_API_KEY, timeout=10000)

# Directorios base y de salida
BASE_DIR = "./i18n"
OUTPUT_DIR = "./i18n_translated"

# Crear la carpeta de salida si no existe
os.makedirs(OUTPUT_DIR, exist_ok=True)


def translate_text(text, client, is_template=False):
    """Traducir un texto usando OpenAI, omitiendo las variables."""
    variables = re.findall(r'\${(.*?)}|{{(.*?)}}', text)
    placeholders = {}
    for i, var in enumerate(variables):
        placeholder = f"__VAR_{i}__"
        placeholders[placeholder] = var[0] if var[0] else var[1]
        text = text.replace(var[0] if var[0] else var[1], placeholder)

    print(f"Traduciendo el texto (sin variables): {text[:50]}...")

    # Condición de no modificar 'question' solo si es un archivo template
    if is_template:
        messages_prompt = [
            {
                "role": "system",
                "content": "You are a helpful assistant that translates English to Korean. Please ensure you do not modify the content of the 'question' key. Only provide the translations in the 'i18n' section, preserving the original 'question' content."
            },
            {
                "role": "user",
                "content": text
            }
        ]
    else:
        messages_prompt = [
            {
                "role": "system",
                "content": "You are a helpful assistant that translates English to Korean."
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


def translate_ts_file(file_path, client):
    """Traducir el contenido de un archivo .ts."""
    print(f"Procesando archivo: {file_path}")
    is_template = "templates" in file_path  # Verificar si es un archivo de la carpeta 'templates'
    with open(file_path, "r", encoding="utf-8") as file:
        content = file.read()
    translated_content = translate_text(content, client, is_template)
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

    translated_content = translate_ts_file(file_path, client)
    if translated_content is not None:
        relative_path = os.path.relpath(file_path, BASE_DIR)
        output_path = os.path.join(output_dir, relative_path)
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        print(f"Guardando archivo traducido: {output_path}")
        with open(output_path, "w", encoding="utf-8") as output_file:
            output_file.write(translated_content)
        print(f"Archivo traducido guardado en: {output_path}")
    else:
        print(f"Error al procesar: {file_path}")


def process_directory(directory_path, output_dir, client):
    """Procesar todos los archivos .ts dentro de un directorio."""
    for root, _, files in os.walk(directory_path):
        for file in files:
            if file.endswith(".ts"):
                file_path = os.path.join(root, file)
                process_file(file_path, output_dir, client)


def main():
    """Función principal del script."""
    import argparse
    parser = argparse.ArgumentParser(description="Traducir archivo(s) .ts usando OpenAI API.")
    parser.add_argument("path", help="Ruta de un archivo o directorio (ej. 'web/agents.ts' o 'web').")
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
