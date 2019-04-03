import React, { Component } from 'react';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

export default class ErrorBoundry extends Component {
  state = {
    errorCatched: false
  }

  componentDidCatch() {
    this.setState({errorCatched: true});
  }

  render() {
    if (this.state.errorCatched) {
      return <ErrorIndicator />
    }
    return this.props.children;
  }
}
