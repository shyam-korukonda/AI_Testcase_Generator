# models.py

# Import BaseModel from pydantic
from pydantic import BaseModel


# Request model for feature description
class FeatureRequest(BaseModel):
    feature: str