import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,
        Row,
        Col,} from 'react-bootstrap';
import styled from 'styled-components'

import SearchResults from './SearchResults';

const GreetingText = styled.p`
  color: #46505a;
  font-family: 'Lobster', cursive;
  font-size: 2rem;
  text-align: center;
`;

class Search extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
        <Container>
          <Row>{this.props.videoItems !== null
                                      ? <SearchResults videoItems={this.props.videoItems}/>
                                      : <Col><GreetingText>You have to paste something....</GreetingText></Col>}
          </Row>
        </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    videoItems: state.videoItems
   }
}

export default connect(mapStateToProps)(Search);
