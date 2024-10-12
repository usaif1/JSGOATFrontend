// services/apiClient.js
import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response, // If successful, just return the response
  (error) => {
    if (error.response) {
      // Server responded with a status other than 2xx
      const statusCode = error.response.status;
      switch (statusCode) {
        case 401:
          // Handle Unauthorized errors globally
          console.log("Unauthorized! Redirecting to login...");
          // Redirect to login or show a message
          break;
        case 403:
          // Forbidden
          console.log("Access Denied!");
          break;
        case 404:
          // Resource not found
          console.log("Resource not found");
          break;
        case 500:
          // Internal server error
          console.log("Server error, please try again later");
          break;
        default:
          console.log(
            `Error: ${error.response.data.message || "Unknown error"}`
          );
      }
    } else if (error.request) {
      // No response was received (e.g., timeout)
      console.log("No response from the server, please check your connection");
    } else {
      // Other errors (e.g., setting up the request)
      console.log("Request error:", error.message);
    }
    // Optionally throw the error so you can handle it at the component level too
    return Promise.reject(error);
  }
);

export default apiClient;
