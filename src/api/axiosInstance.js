import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Base URL for your backend API
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;