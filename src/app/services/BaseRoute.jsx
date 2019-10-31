import axios from 'axios';
// import { connect } from 'react-redux';

const axiosInstance = axios.create({
  baseURL: 'https://bugxhunter-backendr.herokuapp.com/',
  headers: {
    'Content-Type': 'application/json',
  }

});
const axiosDevelop = axios.create({
  baseURL: 'http://localhost:2000/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
