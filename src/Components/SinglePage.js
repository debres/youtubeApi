import React, { Component } from 'react';
import axios from 'axios';
import {Jumbotron,
        Container,
        Row,
        Col } from 'react-bootstrap';

import RelatedVideo from './RelatedVideo';
import Comments from './Comments';

export default class SinglePage extends Component {
  state = {
    surfing: '',
    videoItems: null,
    relatedVideo: null,
    relatedComments: null
  }

  componentDidMount() {
    const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';
    axios.get(`search?part=snippet&maxResults=5&key=${apiKey}&type=video&relatedToVideoId=${this.props.id}`)
        .then(videoRes =>  {
          const relatedVideo =  videoRes.data.items;
          this.setState({relatedVideo});
        });
    axios.get(`commentThreads?part=snippet%2Creplies&key=${apiKey}&videoId=${this.props.id}`)
        .then(commentRes =>  {
          const relatedComments =  commentRes.data.items;
          this.setState({relatedComments})
        });
  }

  render() {
    return (
        <Container>
          <Jumbotron>
            <Row>
              <Col xs={12} md={8}>
                                  <iframe width="720" height="405"
                                          src={`https://www.youtube.com/embed/${this.props.id}`}
                                          frameBorder="0"
                                          allowFullScreen
                                          title='title'>
                                  </iframe>
              </Col>
              <Col xs={6} md={4}>{this.state.relatedVideo !== null
                                          ? <RelatedVideo relatedVideo={this.state.relatedVideo}/>
                                          : <Row><Col>You can start right now...</Col></Row>}</Col>

            </Row>
            <Row>
              <Col xs={12} md={8}>{this.state.relatedComments !== null
                                          ? <Comments relatedComments={this.state.relatedComments}/>
                                          : <Row><Col>You can start right now...</Col></Row>}</Col>
            </Row>
          </Jumbotron>
        </Container>
    );
  }
}
