import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import HeaderContainer from './Containers/HeaderContainer';
import SearchResultsContainer from './Containers/SearchResultsContainer';
import SinglePage from './Components/SinglePage';

function Layouts() {
  return (
    <Fragment>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={SearchResultsContainer} exact/>
        <Route path="/SinglePage/:id"
                 render={({match})=>{
                    const { id } = match.params
                    return <SinglePage id={id}/>}}/>
      </Switch>
    </Fragment>
  );
}

export default Layouts;
