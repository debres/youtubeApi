import React, { Component,
                Fragment } from 'react';
import { Route } from 'react-router-dom';
import Search from './Components/Search.js';
import SinglePage from './Components/SinglePage';

class Layouts extends Component {

  render() {
    return (
      <Fragment>
          <Route path="/" component={Search} />
          <Route path="/SinglePage/:id"
                 render={({match})=>{
                    console.log(match);
                    const { id } = match.params
                    return <SinglePage id={id}/>}}/>
      </Fragment>
    );
  }
}

export default Layouts;
