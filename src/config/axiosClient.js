import axios from 'axios';
const BASE_PATH = process.env.REACT_APP_PUBLIC_URL|| 'http://localhost:9000/barbershop/api/';

console.log(BASE_PATH);
const axiosClient = axios.create({
   // baseURL: 'https://barber-shop-mern.herokuapp.com/barbershop/api'
   baseURL: BASE_PATH
});

export default axiosClient;