import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3003/api/v1",
  timeout: 20000,
});

export default api;
