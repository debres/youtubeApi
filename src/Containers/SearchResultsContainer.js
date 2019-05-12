import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../Components/SearchResults/SearchResults';

class SearchResultsContainer extends Component {

  shouldComponentUpdate(prevProps) {
    if (this.props.videoItems !== prevProps.videoItems) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return <SearchResults {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    videoItems: state.search.videoItems,
    loading: state.search.loading
   }
}

export default connect(mapStateToProps, null)(SearchResultsContainer);
