import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRelatedVideo } from '../Actions/GetRelatedVideo';

import RelatedVideo from '../Components/RelatedVideo';

function RelatedVideoCotainer(props) {

  useEffect(() => {
    props.getRelatedVideo(props.id);
  },[]);

  return <RelatedVideo videoItems={videoItems}/>
}

const mapStateToProps = (state) => {
  return {
    videoItems: state.relatedVideo.videoItems
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedVideo: (id) => dispatch(getRelatedVideo(id))
  }
}

export default connect(mapDispatchToProps, mapDispatchToProps)(RelatedVideo);
