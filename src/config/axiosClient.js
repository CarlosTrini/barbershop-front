import axios from 'axios';
const BASE_PATH = process.env.PUBLIC_URL|| 'http://localhost:9000/barbershop/api/';


const axiosClient = axios.create({
   // baseURL: 'https://barber-shop-mern.herokuapp.com/barbershop/api'
   baseURL: BASE_PATH
   
});

export default axiosClient;