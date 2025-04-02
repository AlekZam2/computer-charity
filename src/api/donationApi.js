import axios from "axios";

const API_URL = "http://localhost:5000/api/donations";

export const submitDonation = async (donationData) => {
  try {
    await axios.post(`${API_URL}/donations`, donationData);
  } catch (error) {
    throw error.response?.data?.message || "Donation submission failed";
  }
};
