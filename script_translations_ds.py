from openai import OpenAI
import json
import os

# Script Con Api Key de DeepSeek para traducir un JSON


DEEPSEEK_API_KEY = "-"

client = OpenAI(
    api_key=DEEPSEEK_API_KEY,
    base_url="https://api.deepseek.com/v1",
    timeout=10000
)

# Uso de las funciones
json_data = {
    "daily": {
        "finish": "Well done! Keep up the momentum and have a fantastic day!  🙌\n> To edit this report, type `checkin edit`.",
        },
    }

def translate_text(text, client):
    messages_prompt = [
        {
            "role": "system",
            "content": "You are a helpful assistant that translates English to Chinese."
        },
        {
            "role": "user",
            "content": text
        }
    ]

    response = client.chat.completions.create(
        model='deepseek-chat',
        messages=messages_prompt,
        temperature=0.7,
        n=1,
        user='non-user'
    )

    return response.choices[0].message.content

def translate_json(json_data, client):
    translated_data = {}
    for key, value in json_data.items():
        if isinstance(value, dict):
            translated_data[key] = translate_json(value, client)
        else:
            translated_data[key] = translate_text(value, client)
    return translated_data

# Crear la ruta para guardar el archivo
output_dir = os.path.expanduser('~/Documents/new-languages')

# Crear la carpeta si no existe
os.makedirs(output_dir, exist_ok=True)

# Guardar el archivo traducido en la ruta especificada
output_path = os.path.join(output_dir, 'translated_data.json')
translated_json_data = translate_json(json_data, client)

# Guardar el JSON traducido en el archivo
with open(output_path, 'w', encoding='utf-8') as json_file:
    json.dump(translated_json_data, json_file, ensure_ascii=False, indent=2)

print(f"Archivo guardado en: {output_path}")