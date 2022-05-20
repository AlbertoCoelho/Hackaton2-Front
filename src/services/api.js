import axios from "axios";

export const api = axios.create({
    /*Fix me: Ao criar uma nova instância do axios, a baseURL não está aceitando a variável de ambiente. */
  // baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
  baseURL: "https://mongodb-deploy-cardgamestore.herokuapp.com",
});

export const makeSignUp = async (formData) => {
  await api.post("/sign-up", formData);
};

export const makeLogin = async (formData) => {
  const token = await api.post("/sign-in", formData);
  return token;
};