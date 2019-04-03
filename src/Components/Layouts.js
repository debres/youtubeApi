import React, { Component,
                Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import SearchResults from './SearchResults';
import SinglePage from './SinglePage';

class Layouts extends Component {
  render() {
    return (
      <Fragment>
        <Search />
        <Switch>
          <Route path="/SearchResults" component={SearchResults} />
          <Route path="/SinglePage/:id"
                 render={({match}) => {
                    const { id } = match.params
                    return <SinglePage id={id}/>}}/>
        </Switch>
      </Fragment>
    );
  }
}

export default Layouts;
