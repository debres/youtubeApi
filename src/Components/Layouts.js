import React, { Component,
                Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Search from './Search';
import SinglePage from './SinglePage';

class Layouts extends Component {

  search() {
    const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';
    axios.get(`search?part=snippet&maxResults=10&q=${this.state.surfing}&type=video&key=${apiKey}`)
        .then(dataRes =>  {
          const videoItems =  dataRes.data.items;
          this.setState({videoItems});
        });
  }

  render() {
    return (
      <Switch>
          <Search />
          <Route path="/"
                 render={(this.search() = > {})} />
          <Route path="/SearchResults" render={}>
          <Route path="/SinglePage/:id"
                 render={({match}) => {
                    console.log(match);
                    const { id } = match.params
                    return <SinglePage id={id}/>}}/>
      </Switch>
    );
  }
}

export default Layouts;
