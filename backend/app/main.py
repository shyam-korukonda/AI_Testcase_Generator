# main.py

# Import FastAPI framework
from fastapi import FastAPI

# Import CORS middleware
from fastapi.middleware.cors import CORSMiddleware

# Import API routes
from .routes import router


# Create FastAPI application instance
app = FastAPI(
    title="AI Test Case Generator API",
    description="Generate software test cases using AI",
    version="1.0"
)


# Enable CORS (important for React frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Register routes
app.include_router(router)


# Root endpoint (for testing API)
@app.get("/")
def read_root():
    return {"message": "AI Test Case Generator API is running"}