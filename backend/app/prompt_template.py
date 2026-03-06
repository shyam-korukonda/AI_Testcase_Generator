# Prompt template for generating structured test cases

def create_prompt(feature_description):

    prompt = f"""
You are a senior QA automation engineer.

Your task is to generate software test cases.

Feature:
{feature_description}

Generate:
- Positive test cases
- Negative test cases
- Edge cases

Return the output ONLY in JSON format.

Format:

{{
  "test_cases": [
    {{
      "id": "TC01",
      "description": "Test case description",
      "steps": "Step by step execution",
      "expected_result": "Expected system behavior"
    }}
  ]
}}

Generate at least 6 test cases.

Do not include explanations.
Return valid JSON only.
"""

    return prompt