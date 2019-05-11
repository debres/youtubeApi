import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedVideo } from '../Actions/GetRelatedVideo';

import RelatedVideo from '../Components/RelatedVideo/RelatedVideo';

class RelatedVideoCotainer extends Component {

  shouldComponentUpdate(prevProps) {
    if (this.props.relatedVideoItems !== prevProps.relatedVideoItems) {
      return true;
    } else {
      return false;
    }
  }

  componentWillMount() {
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
