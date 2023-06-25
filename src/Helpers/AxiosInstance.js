import axios from 'axios';

const AxiosInstance = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhvZG9AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjg3MzUyNzQ4fQ.7v0OsNeN4QHItOvFfmSkW5jW-KEPZJfnJWm4TXFPgcM'
      }
})

export default AxiosInstance;