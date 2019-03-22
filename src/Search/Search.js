import React, { Component } from 'react';
import {Container,
        Row,
        Col,
        FormGroup,
        FormControl,
        InputGroup,
        Button} from 'react-bootstrap';
import axios from 'axios';

import SearchResults from '../SearchResults/SearchResults';

export default class Header extends Component {
  state = {
    surfing: '',
    videos: []

  }

  search() {
    const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';
    const FETCH_URL = `search?part=snippet&maxResults=25&q=${this.state.surfing}&key=${apiKey}`;
    axios.get(FETCH_URL)
        .then(dataRes =>  {
           const videos =  dataRes.data.items;
           console.log('This seacrch video is', videos)
           this.setState({videos});
         })
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
              <Col xs={3} md={3}>
                Logo
              </Col>
              <Col xs={3} md={3}>
                Main nav
              </Col>
              <Col xs={12} md={6}>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text"
                               value={this.state.surfing}
                               placeholder="serch for videos"
                               onChange={event => {this.setState({surfing: event.target.value})}}
                               onKeyPress={event => {
                                 if (event.key === 'Enter') {
                                   this.search()
                                 }
                               }}/>
                  <InputGroup.Append onClick={() => this.search()}>
                    <Button variant="outline-secondary">Search</Button>
                  </InputGroup.Append>
                </InputGroup>
              </FormGroup>
              </Col>
            </Row>
            <Row>
              <SearchResults videoList={this.state.videos} />
            </Row>
          </Container>
        </div>
    )
  }
}
