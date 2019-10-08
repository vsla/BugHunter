import axios from 'axios';
// import { connect } from 'react-redux';

const axiosInstance = axios.create({
  baseURL: 'https://bughunter-backend.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});
const axiosDevelop = axios.create({
  baseURL: 'http://172.22.65.13/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosDevelop;
