import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getRelatedVideo } from '../Actions/GetRelatedVideo';
import { getRelatedComments } from '../Actions/GetRelatedComments';

class SinglePage extends Component {

  componentDidMoun() {

  }

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedVideo: state.relatedVideo.videoItems,
    relatedComments: state.relatedComments.commentItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedVideo: (id) => dispatch(getRelatedVideo(id)),
    getRelatedComments: (id) => dispatch(getRelatedComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePage);
