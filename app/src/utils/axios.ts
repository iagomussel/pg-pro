import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/api/';
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    (config) => {
        // inject token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
    );

axios.interceptors.response.use(
    (response) => {
        // check 401
        if (response.status === 401) {
            localStorage.removeItem('token');
            // redirect to login
             window.location.href = '/';
        }
        if (response.status === 403) {
            // set error to unauthorized
            return Promise.reject('Unauthorized');
        }
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
    );

export default axios;
