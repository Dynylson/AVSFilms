import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export const axiosApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
