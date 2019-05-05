import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchResults from '../Components/SearchResults';

class SearchResultsContainer extends Component {
  
  componentDidUdate(prevProps) {
    if (this.props.videoItems !== prevProps.videoItems) {
      this.updateList();
    }
  }

  updateList() {
    const { videoItems } = this.props;
    if (!videoItems) {
      return;
    }
    this.steState({videoItems});
  }

  render() {
    return <SearchResults {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    videoItems: state.search.videoItems
   }
}

export default connect(mapStateToProps, null)(SearchResultsContainer);
