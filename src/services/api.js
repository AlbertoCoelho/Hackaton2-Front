import axios from "axios";

export const api = axios.create({
  baseURL: "https://mongodb-deploy-cardgamestore.herokuapp.com",
});

export const makeSignUp = async (formData) => {
  await api.post("/sign-up", formData);
};

export const makeLogin = async (formData) => {
  const token = await api.post("/sign-in", formData);
  return token;
};