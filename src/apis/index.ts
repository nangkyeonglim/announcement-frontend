import axios from 'axios';

export const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-type': 'application/json',
  },
});
