import axios from 'axios';
// const BASEPATH = process.env.BACKEND_BARBERSHOP || 'http://localhost:9000/barbershop/api/';


const axiosClient = axios.create({
   baseURL: 'https://desolate-sea-20956.herokuapp.com/barbershop/api/'
});

export default axiosClient;