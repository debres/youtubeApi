import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import configStore from './ConfigStore/ConfigStore';
import ErrorBoundry from './Containers/ErrorBoundry';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import Layouts from './Layouts/Layouts';

axios.defaults.baseURL = 'https://www.googleapis.com/youtube/v3';

const store = configStore();

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <ErrorBoundry>
        <Layouts />
      </ErrorBoundry>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
