import React, { Fragment } from 'react';
//import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Search from './Containers/Search';
//import SinglePage from './SinglePage';

const layouts = () => {
  return (
    <Fragment>
      <Header />
      <Search />
    </Fragment>
  );
}

export default layouts;
