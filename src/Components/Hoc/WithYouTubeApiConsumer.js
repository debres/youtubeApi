import React from 'react';
import { youTubeApiConsumer } from '../ApiServiceContext/ApiServiceContext';

const withYouTubeApiConsumer = () = (Wrapped) => {
  return (props) => {
    <Consumer>
      {
        (ApiService) => {
          return (<Wrapped {...props} ApiService={ApiService}/>);
        }
      }
    </<Consumer>
  }
}

export default withYouTubeApiConsumer;
