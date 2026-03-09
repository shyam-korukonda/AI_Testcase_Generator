// frontend/src/api/api.js

// Import axios for making HTTP requests
import axios from "axios";

/*
  Base URL of the backend API.

  During local development:
  http://127.0.0.1:8000

  After deployment on Render:
  https://ai-testcase-backend.onrender.com
*/

const API_BASE_URL = "http://127.0.0.1:8000"; // Change this when deploying


/*
  Function: generateTestCasesAPI

  This function sends the feature description to the backend
  and returns the generated test cases.
*/

export const generateTestCases = async (feature) => {
  try {
    // Send POST request to FastAPI backend
    const response = await axios.post(
      `${API_BASE_URL}/generate-testcases`,
      {
        feature: feature
      }
    );

    // Return the backend response
    return response.data;

  } catch (error) {
    // Handle API errors
    console.error("Error calling backend API:", error);

    return {
      test_cases: "Error generating test cases. Please try again."
    };
  }
};