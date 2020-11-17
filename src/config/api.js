import axios from 'axios'

// Create an axios instance
export default axios.create({
  baseURL: 'https://peaceful-beach-10735.herokuapp.com',
  timeout: 5000,
  withCredentials: true
})