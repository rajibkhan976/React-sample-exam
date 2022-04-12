import axios from 'axios';

export const apiClient = axios.create({
    baseURL: `https://randomuser.me/`,
    headers: {
        'Content-Type': 'application/json'
    }
});