import React, { Component } from 'react';
import ErrorIdicator from '../ErrorIdicator/ErrorIdicator';

export default class ErrorBoundry extends Component {
  state = {
    errorCatched: false
  }

  componentDidCatch() {
    this.setState({errorCatched: true});
  }

  render() {
    if (this.state.errorCatched) {
      return <ErrorIdicator />
    }
    return this.props.children;
  }
}
