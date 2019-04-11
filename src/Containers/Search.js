import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'

import SearchResults from '../Components/SearchResults';

const SearchContaier = styled.section`
    padding: 0 1rem;
    display: flex;
    flex-flow: column nowrap;
`;

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
        <SearchContaier>
          {this.props.videoItems !== null
                                      ? <SearchResults videoItems={this.props.videoItems}/>
                                      : <GreetingText>You have to paste something....</GreetingText>}
        </SearchContaier>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoItems: state.search.videoItems
   }
}

export default connect(mapStateToProps)(Search);
