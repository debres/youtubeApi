import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedVideo } from '../Actions/GetRelatedVideo';

import RelatedVideo from '../Components/RelatedVideo';

class RelatedVideoCotainer extends Component {

  componentDidMount() {
    const { getRelatedVideo, id } = this.props;
    getRelatedVideo(id);
  }

  render() {
    return <RelatedVideo {...this.props}/>
  }
}

const mapStateToProps = (state) => {
  return {
    relatedVideoItems: state.relatedVideo.relatedVideoItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedVideo: (id) => dispatch(getRelatedVideo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedVideoCotainer);
