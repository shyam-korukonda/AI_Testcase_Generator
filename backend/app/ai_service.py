import requests
import json
from .prompt_template import create_prompt


OLLAMA_URL = "http://localhost:11434/api/generate"


def generate_test_cases(feature_description):

    prompt = create_prompt(feature_description)

    payload = {
        "model": "phi",
        "prompt": prompt,
        "stream": False,
        "keep_alive": "2m"
    }

    try:

        response = requests.post(
            OLLAMA_URL,
            json=payload,
            timeout=120
        )

        data = response.json()

        ai_text = data.get("response", "")

        # Convert AI text into JSON
        try:
            parsed_json = json.loads(ai_text)
        except:
            parsed_json = {
                "test_cases": [
                    {
                        "id": "TC01",
                        "description": "AI response parsing failed",
                        "steps": "Check AI output formatting",
                        "expected_result": "AI should return valid JSON"
                    }
                ]
            }

        return parsed_json

    except Exception as e:

        return {
            "test_cases": [
                {
                    "id": "TC01",
                    "description": "AI request failed",
                    "steps": "Check Ollama server",
                    "expected_result": str(e)
                }
            ]
        }