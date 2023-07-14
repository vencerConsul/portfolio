import axios from 'axios';

export default () => {
    return new Promise((resolve, reject) => {
      const instance = axios.create({
        baseURL: 'https://vencer-olermo.vercel.app',
      });
  
      resolve(instance);
    });
  };