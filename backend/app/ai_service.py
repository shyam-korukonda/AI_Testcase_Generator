import os

import requests

# HuggingFace model endpoint
API_URL = "https://api-inference.huggingface.co/models/google/flan-t5-large"

# Replace with your HuggingFace token
HF_TOKEN = os.getenv("HF_TOKEN")

headers = {
    "Authorization": f"Bearer {HF_TOKEN}"
}


def generate_test_cases(prompt):
    """
    Sends prompt to HuggingFace model
    and returns generated test cases
    """

    payload = {
        "inputs": prompt,
        "parameters": {
            "max_new_tokens": 500
        }
    }

    response = requests.post(
        API_URL,
        headers=headers,
        json=payload
    )

    result = response.json()

    # HuggingFace returns list
    if isinstance(result, list):
        return result[0]["generated_text"]

    return str(result)