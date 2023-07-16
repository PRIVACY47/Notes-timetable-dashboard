import axios from 'axios';
let token  = localStorage.getItem('token')
const AxiosInstance = axios.create({
    baseURL: 'http://13.233.126.93:8000/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
})

export default AxiosInstance;