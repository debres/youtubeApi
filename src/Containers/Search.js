import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import SearchResults from '../Components/SearchResults';

const GreetingText = styled.h2`
  color: #46505a;
  font-family: 'Lobster', cursive;
  font-size: 2rem;
  text-align: center;
`;

class Search extends Component {
  state = {
    videoItems: null
  }

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
    console.log(this.props.videoItems);
    return (
      <Fragment>
        {this.props.videoItems  !== null
                                ? <SearchResults videoItems={this.props.videoItems}/>
                                : <GreetingText>You have to paste something....</GreetingText>}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoItems: state.search.videoItems
   }
}

export default connect(mapStateToProps)(Search);
