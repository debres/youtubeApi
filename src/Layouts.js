import React, { Component, Fragment } from 'react';
import Header from './Header/Header.js';
import './Layouts.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <section>Random video</section>
        <aside>Related video list</aside>
      </Fragment>
    );
  }
}

export default App;
