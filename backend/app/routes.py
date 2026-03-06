from fastapi import APIRouter
from .models import FeatureRequest
from .ai_service import generate_test_cases

router = APIRouter()


@router.post("/generate-testcases")
def generate_testcases(request: FeatureRequest):

    result = generate_test_cases(request.feature)

    return result