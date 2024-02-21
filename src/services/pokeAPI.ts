import axios, { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export const BASE_URL = 'https://pokeapi.co/api/v2';