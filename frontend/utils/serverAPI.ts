import axios from 'axios';
// import { REACT_APP_API_URL } from "@env";

export const serverAPI = axios.create({
  baseURL: 'http://192.168.1.0:8000',
});
