import axios from "axios";

const API_URL = "http://localhost:5000/api/admin";

// contact form in the footer
export const sendMessage = async (message) => {
  try {
    await axios.post(`${API_URL}/message`, message);
  } catch (error) {
    throw error.response?.data?.message || "Failed to send message";
  }
};
