// API configuration for both development and production
const API_BASE_URL = import.meta.env.PROD
    ? '' // In production, use relative URLs (same domain)
    : 'http://localhost:8000'; // In development, use backend server

export const API_ENDPOINTS = {
    courses: `${API_BASE_URL}/api/courses/`,
    contact: `${API_BASE_URL}/api/contact/`,
};

export default API_BASE_URL;
