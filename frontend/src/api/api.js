// api.js

// Import axios library
import axios from "axios";

// Backend API base URL
const API_BASE_URL = "http://127.0.0.1:8000";

// Function to call the test case generation API
export const generateTestCases = async (featureDescription) => {

  try {

    // Send POST request to backend
    const response = await axios.post(
      `${API_BASE_URL}/generate-testcases`,
      {
        feature: featureDescription
      }
    );

    // Return response data
    return response.data;

  } catch (error) {

    console.error("API Error:", error);
    throw error;

  }
};