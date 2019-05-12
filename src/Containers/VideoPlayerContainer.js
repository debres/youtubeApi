import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getVideoInfo } from '../Actions/GetVideoInfo';
import VideoPlayer from '../Components/VideoPlayer/VideoPlayer';

class VideoPlayerContainer extends Component {

  shouldComponentUpdate(prevProps) {
    if (this.props.videoStatistics !== prevProps.videoStatistics) {
      return true;
    } if (this.props.id !== prevProps.id) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    const { getVideoInfo, id } = this.props;
    getVideoInfo(id);
  }

  componentWillMount() {
    const { getVideoInfo, id } = this.props;
    getVideoInfo(id);
  }

  render() {
    return <VideoPlayer {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    videoStatistics: state.videoInfo.videoStatistics,
    loading: state.videoInfo.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVideoInfo: (id) => dispatch(getVideoInfo(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayerContainer);
