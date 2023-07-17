import axios from 'axios';
let token  = localStorage.getItem('token')

const getToken = () => {
  console.log('tomaoto')
  return localStorage.getItem('token');
}
const AxiosInstance = axios.create({
    baseURL: 'http://13.233.126.93:8000/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${getToken()}`
      }
})

export default AxiosInstance;