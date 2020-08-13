import axios from 'axios';

const api = axios.create({
    baseURL: 'http://172.16.1.145:3333/api'
});

export default api;