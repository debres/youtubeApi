import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRelatedVideo } from '../Actions/GetRelatedVideo';

import RelatedVideo from '../Components/RelatedVideo/RelatedVideo';

class RelatedVideoCotainer extends Component {

  shouldComponentUpdate(prevProps) {
    if (this.props.relatedVideoItems !== prevProps.relatedVideoItems) {
      return true;
    } if (this.props.id !== prevProps.id) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    const { getRelatedVideo, id } = this.props;
    getRelatedVideo(id);
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
    relatedVideoItems: state.relatedVideo.relatedVideoItems,
    loading: state.relatedVideo.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedVideo: (id) => dispatch(getRelatedVideo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedVideoCotainer);
