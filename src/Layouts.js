import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Search from './Containers/Search';
import SinglePage from './Containers/SinglePage';

const Layouts = () => {
  return (
    <Fragment>
      <Header />
      <Switch>
        <Route path="/" component={Search} exact/>
        <Route path="/SinglePage/:id"
                 render={({match})=>{
                    const { id } = match.params
                    return <SinglePage id={id}/>}}/>
      </Switch>
    </Fragment>
  );
}

export default Layouts;
