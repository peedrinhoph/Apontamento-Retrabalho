import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://0.0.0.0:3333/api'
    baseURL: `http://${process.env.REACT_APP_IP_API}:${process.env.REACT_APP_PORTA_API}/api`
});

export default api;
