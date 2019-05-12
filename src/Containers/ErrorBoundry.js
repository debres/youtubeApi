import React, { Component } from 'react';
import { connect } from 'react-redux';
import ErrorIndicator from '../Components/ErrorIndicator/ErrorIndicator';

class ErrorBoundry extends Component {

  componentDidCatch() {
    
  }

  render() {
    if (this.props.error) {
      return <ErrorIndicator />
    }
    return this.props.children;
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.search.error
  }
}

export default connect(mapStateToProps, null)(ErrorBoundry);
