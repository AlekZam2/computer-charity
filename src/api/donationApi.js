import axios from "axios";

const API_URL = "http://localhost:5000/api/donations";
const token = localStorage.getItem("token");

export const submitDonation = async (donationData) => {
  try {
    await axios.post(`${API_URL}/donations`, donationData);
  } catch (error) {
    throw error.response?.data?.message || "Donation submission failed";
  }
};
export const getDonations = async () => {
  try {
    const response = await axios.get(`${API_URL}/donations`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch donations";
  }
};
export const getDonationById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/donations/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch donation";
  }
};
export const updateDonation = async (id, donationData) => {
  try {
    await axios.put(
      `${API_URL}/donations/${id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      },
      donationData
    );
  } catch (error) {
    throw error.response?.data?.message || "Failed to update donation";
  }
};
export const deleteDonation = async (id) => {
  try {
    await axios.delete(`${API_URL}/donations/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (error) {
    throw error.response?.data?.message || "Failed to delete donation";
  }
};
