import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Layouts from './Layouts';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

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

const app = (
  <BrowserRouter>
    <Layouts />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
