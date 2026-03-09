from fastapi import APIRouter
from app.ai_service import generate_test_cases

router = APIRouter()

@router.post("/generate-testcases")
async def generate(feature: dict):

    prompt = feature["feature"]

    result = generate_test_cases(prompt)

    return {"test_cases": result}