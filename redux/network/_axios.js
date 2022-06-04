import axios from 'axios';

// Redux
import { store } from '../api/store';
import { logout } from '../api/slices/authSlice';

// Base URL for Instance
export const apiUrl = 'http://localhost:4000/api';

export const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user'));
    config.headers.Authorization = 'Bearer ' + user?.token;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(logout());
    }
    // Do something with response error
    return Promise.reject(error);
  }
);
