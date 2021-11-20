import axios from 'axios';
const BASEPATH = 'http://localhost:9000/barbershop/api/';


const axiosClient = axios.create({
   baseURL: 'http://localhost:9000/barbershop/api/'
});

export default axiosClient;