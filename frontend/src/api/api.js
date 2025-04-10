import axios from "axios";

const API = axios.create({
  baseURL: "https://your-backend-url.com/api", // Change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;  // ✅ This ensures a proper default export
