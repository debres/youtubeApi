import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedVideo } from '../Actions/GetRelatedVideo';
import { getRelatedComments } from '../Actions/GetRelatedComments';
import {Container,
        Row,
        Col,
        Spinner } from 'react-bootstrap';

import RelatedVideo from '../Components/RelatedVideo';
import Comments from '../Components/Comments';

class SinglePage extends Component {
  state = {
    relatedVideo: null,
    relatedComments: null
  }

  componentDidMoun() {
    this.props.getRelatedVideo(this.props.id);
    this.props.getRelatedComments(this.props.id);
  }

  render() {
    console.log(this.props.relatedVideo);
    console.log(this.props.relatedComments);
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
            <Col xs={4} md={4}>{this.props.relatedVideo !== undefined
                                        ? <RelatedVideo relatedVideo={this.props.relatedVideo}/>
                                        : <Row><Col><Spinner animation="border" />;</Col></Row>}</Col>

            </Row>
            <Row>
            <Col xs={12} md={8}>{this.props.relatedComments !== undefined
                                        ? <Comments relatedComments={this.props.relatedComments}/>
                                        : <Row><Col><Spinner animation="border" />;</Col></Row>}</Col>
            </Row>
        </Container>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    relatedVideo: state.relatedVideo.videoItems,
    relatedComments: state.relatedComments.commentItems
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedVideo: (id) => dispatch(getRelatedVideo(id)),
    getRelatedComments: (id) => dispatch(getRelatedComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
