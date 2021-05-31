import axios from 'axios';
const TOKEN = 'token'

let axiosInstance = axios.create();

axiosInstance.interceptors.request.use((config) => {
   const token = window.localStorage.getItem(TOKEN);
   config.headers.authorization = token ? token : '';
   return config;
})

export const setToken = (token) => {
   window.localStorage.setItem(TOKEN, token);
}
export const removeToken = () => {
   window.localStorage.removeItem(TOKEN);
}

export default axiosInstance;
