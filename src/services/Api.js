import axios from 'axios';

export default () =>{
    return axios.create({
        baseURL: 'https://vencer-olermo.vercel.app/',
    });
}