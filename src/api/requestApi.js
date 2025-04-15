import axios from "axios";

const API_URL = "http://localhost:5000/api/requests";
const token = localStorage.getItem("token");

export const submitRequest = async (requestData) => {
  try {
    await axios.post(`${API_URL}`, requestData);
  } catch (error) {
    throw error.response?.data?.message || "Request submission failed";
  }
};
export const getRequests = async () => {
  try {
    const response = await axios.get(`${API_URL}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch requests";
  }
};

export const updateRequest = async (requestData) => {
  try {
    await axios.put(
      `${API_URL}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      requestData
    );
  } catch (error) {
    throw error.response?.data?.message || "Failed to update request";
  }
};
export const deleteRequest = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete request";
  }
};
