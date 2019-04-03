import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Search from './Search';
import SinglePage from './SinglePage';

const layouts = () => {
  return (
    <Fragment>
        <Header />
        <Switch>
          <Route path="/" exact component={Search} />
          <Route path="/SinglePage/:id"
                 render={({match}) => {
                    const { id } = match.params
                    return <SinglePage id={id}/>}}/>
        </Switch>
      </Fragment>
  );
}

export default layouts;
