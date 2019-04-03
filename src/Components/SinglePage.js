import React, { Component } from 'react';
import axios from 'axios';
import {Container,
        Row,
        Col } from 'react-bootstrap';

import RelatedVideo from './RelatedVideo';
import Comments from './Comments';

export default class SinglePage extends Component {
  state = {
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
          console.log(relatedComments);
          this.setState({relatedComments})
        });
  }

  render() {
    return (
        <Container>
          <Row>
            <Col xs={8} md={8}>
                                <iframe width="640" height="420"
                                        src={`https://www.youtube.com/embed/${this.props.id}`}
                                        frameBorder="0"
                                        allowFullScreen
                                        title='title'>
                                </iframe>
            </Col>
            <Col xs={4} md={4}>{this.state.relatedVideo !== null
                                        ? <RelatedVideo relatedVideo={this.state.relatedVideo}/>
                                        : <Row><Col>You can start right now...</Col></Row>}</Col>

          </Row>
          <Row>
            <Col xs={12} md={8}>{this.state.relatedComments !== null
                                        ? <Comments relatedComments={this.state.relatedComments}/>
                                        : <Row><Col>You can start right now...</Col></Row>}</Col>
          </Row>
        </Container>
    );
  }
}
