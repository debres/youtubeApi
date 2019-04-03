import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import store from './store';
import ErrorBoundry from './Components/ErrorBoundry/ErrorBoundry';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Layouts from './Components/Layouts';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

const app = (
  <Provider store={store}>
    <ErrorBoundry>
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
    </ErrorBoundry>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
