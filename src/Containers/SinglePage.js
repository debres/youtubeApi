import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container,
        Row,
        Col,
        Spinner } from 'react-bootstrap';

import RelatedVideo from './RelatedVideo';
import Comments from './Comments';

class SinglePage extends Component {

  componentDidMount() {
    this.props.getRelatedVideo();
    this.props.getRelatedComments();
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
            <Col xs={4} md={4}>{this.props.relatedVideo !== null
                                        ? <RelatedVideo relatedVideo={this.props.relatedVideo}/>
                                        : <Row><Col><Spinner animation="border" />;</Col></Row>}</Col>

          </Row>
          <Row>
            <Col xs={12} md={8}>{this.props.relatedComments !== null
                                        ? <Comments relatedComments={this.props.relatedComments}/>
                                        : <Row><Col><Spinner animation="border" />;</Col></Row>}</Col>
          </Row>
        </Container>
    );
  }
}

const mapStateToProps = ({relatedVideo, relatedComments}) => {
  return {
    relatedVideo,
    relatedComments
  }
}

export default connect(mapStateToProps)(SinglePage);
