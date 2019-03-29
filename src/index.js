import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './ErrorBoundry/ErrorBoundry';
import { youTubeApiProvider } from './Components/ApiServiceContext/ApiServiceContext';
import ApiService from './Services/ApiService';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Layouts from './Components/Layouts';

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

const tubeService = new ApiService();

const app = (
  <Provider store={store}>
    <ErrorBoundry>
      <YouTubeApiProvider value={tubeService}>
        <BrowserRouter>
          <Layouts />
        </BrowserRouter>
      </YouTubeApiProvider>
    </ErrorBoundry>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
