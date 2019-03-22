import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Layouts from './Layouts';
import axios from 'axios';

axios.defaults.baseURL = "";

axios.interceptors.request.use(request => {
  return request;
}, error => {
  return Promise.reject(error)
});

axios.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error)
});

ReactDOM.render(<Layouts />, document.getElementById('root'));
