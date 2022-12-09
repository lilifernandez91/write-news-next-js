import https from 'https';
import axios from 'axios';
import { cookies } from '../helpers/cookies-helper';
const axiosApiInstance = axios.create();

axiosApiInstance.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
});

axiosApiInstance.interceptors.request.use(
    async (config) => {
        const token = cookies.getCookie('analitica_fantasy_token');
        const email = cookies.getCookie('analitica_fantasy_user');
        if (token) {
            config.headers = { Authorization: `Bearer ${token}`, af_email: `${email}` };
        } else {
            config.headers = { Authorization: `Bearer token`, af_email: `dayanrr91@gmail.com` };
        }
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

export default axiosApiInstance;
