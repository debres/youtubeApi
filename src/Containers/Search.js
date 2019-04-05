import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,
        Row,
        Col,} from 'react-bootstrap';
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

  componentDidUpdate() {
    this.updateList();
  }

  updateList() {
    const { videoItems } = this.props;
    if (videoItems) {
      return;
    }
    this.steState({videoItems});
  }

  render() {
    return (
        <Container>
          <Row>{this.state.videoItems !== null
                                      ? <SearchResults videoItems={this.state.videoItems}/>
                                      : <Col><GreetingText>You have to paste something....</GreetingText></Col>}
          </Row>
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoItems: state
   }
}

export default connect(mapStateToProps)(Search);
