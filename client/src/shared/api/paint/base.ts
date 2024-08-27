import axios from 'axios';

export const $paint = axios.create({
    baseURL: process.env.NEXT_PUBLIC_PAINT_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
