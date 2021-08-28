import axios from 'axios';
import getAuth from './auth';

// ENV Variabsles
const clientId = process.env.REACT_APP_CLIENT_ID;

const instance = axios.create({
  headers: {
    Accept: 'application/json',
    'Client-ID': clientId,
  },
});

instance.interceptors.request.use(
  async (config) => {
    // console.log('Interceptors firing!!');
    const token = await getAuth();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    } else {
      delete instance.defaults.headers['Authorization'];
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default instance;
