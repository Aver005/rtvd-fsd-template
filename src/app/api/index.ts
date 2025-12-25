import axios from 'axios';
// Mock
import { TestAPI } from './generated';

export const ACCESS_TOKEN_KEY = 'Token';
export const axiosInstance = axios.create();
const commonParameters = [undefined, import.meta.env.RTVD_API_BASE_URL, axiosInstance];

axiosInstance.interceptors.request.use(
    (config) =>
    {
        const authHeader = config.headers['Authorization'];
        if (authHeader) return config;

        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (!token) return config;
        config.headers['Authorization'] = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error),
);

export default {
    TestAPI: new TestAPI(...commonParameters),
}