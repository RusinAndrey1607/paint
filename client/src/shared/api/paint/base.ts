import axios from 'axios';

export const $paint = axios.create({
  baseURL: process.env.PAINT_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});