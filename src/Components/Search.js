import React, { Component } from 'react';
import {Container,
        Row,
        Col,} from 'react-bootstrap';

import SearchResults from './SearchResults';

class Search extends Component {
  state = {
    videoItems: null
  }

  search() {

  }

  render() {
    return (
        <Container>
            <Row>{this.state.videoItems !== null
                                        ? <SearchResults videoItems={this.state.videoItems}/>
                                        : <Col>You have to paste something....</Col>}
            </Row>
        </Container>
    );
  }
}

export default Search;
