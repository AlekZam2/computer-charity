import axios from "axios";

const API_URL = "http://localhost:5000/api/requests";

export const submitRequest = async (requestData) => {
  try {
    await axios.post(`${API_URL}/request`, requestData);
  } catch (error) {
    throw error.response?.data?.message || "Request submission failed";
  }
};
export const getRequests = async () => {
  try {
    const response = await axios.get(`${API_URL}/requests`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch requests";
  }
};

export const updateRequest = async (requestData) => {
  try {
    await axios.put(`${API_URL}/requests`, requestData);
  } catch (error) {
    throw error.response?.data?.message || "Failed to update request";
  }
};
export const deleteRequest = async (id) => {
  try {
    await axios.delete(`${API_URL}/request/${id}`);
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete request";
  }
};
