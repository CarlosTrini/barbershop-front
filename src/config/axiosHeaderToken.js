import axiosClient from "./axiosClient";

const axiosHeaderToken = (token) => {
   return !token 
   ? delete axiosClient.defaults.headers.common['Authorization'] 
   :axiosClient.defaults.headers.common['Authorization'] = token
}
export default axiosHeaderToken;