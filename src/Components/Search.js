import React, { Component } from 'react';
import {Jumbotron,
        Container,
        Row,
        Col,
        FormGroup,
        FormControl,
        InputGroup,
        Button} from 'react-bootstrap';

import axios from 'axios';
import SearchResults from './SearchResults';

export default class Header extends Component {
  state = {
    surfing: '',
    videoIds: null,
    videoItems: null,
    relatedVideo: null,
    relatedComments: null
  }

  search() {
    const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';
    axios.get(`search?part=snippet&maxResults=10&q=${this.state.surfing}&type=video&key=${apiKey}`)
        .then(dataRes =>  {
          const videoItems =  dataRes.data.items;
          this.setState({videoItems});
        });
  }

  render() {
    return (
        <Container>
          <Jumbotron>
            <Row>
                <Col xs={6} md={6}>
                  Logo
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
            </Jumbotron>
            <Jumbotron>
            <Row>{this.state.videoItems !== null
                                        ? <Jumbotron><SearchResults videoItems={this.state.videoItems}/></Jumbotron>
                                        : <Jumbotron><Row><Col>You have to paste some thing....</Col></Row></Jumbotron>}
            </Row>
            </Jumbotron>
          </Container>
    );
  }
}
