import axios from "axios";

const BASE_URL = "http://localhost:5000/users";

// Create User API
export const createUserApi = async (data) => {
  const response = await axios.post(BASE_URL, data);
  return response.data;
};

// Get All Users API
export const getUserApi = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

// Update User API
export const updateUserApi = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/${id}`, data);
  return response.data;
};

// Delete User API
export const deleteUserApi = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response.data;
};