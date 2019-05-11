import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedVideo } from '../Actions/GetRelatedVideo';
import { getRelatedComments } from '../Actions/GetRelatedComments';

import SinglePage from '../Components/SinglePage';

class SinglePageContainer extends Component {
  componentDidUdate(prevProps) {
    if (this.props.id) {
      this.getRelatedContent();
    }
  }

  getRelatedContent() {
    this.props.getRelatedVideo(this.props.id);
    const { videoItems } = this.props;
    this.props.getRelatedComments(this.props.id);
    const { commentItems } = this.props;
  }

  render() {
    const { videoItems, commentItems } = this.props;
    console.log('this videoItems is', videoItems);
    console.log('this commentsItems is', commentItems);
    return <SinglePage {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    videoItems: state.relatedVideo.videoItems,
    commentItems: state.relatedComments.commentItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedVideo: (id) => dispatch(getRelatedVideo(id)),
    getRelatedComments: (id) => dispatch(getRelatedComments(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePageContainer);
