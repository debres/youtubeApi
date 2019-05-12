import { videoInfo } from './consts';

export function getVideoInfo(id) {
  return function (dispatch) {
    return videoInfo(id)
    .then(dispatch({
      type: 'FETCH_VIDEO_INFO_PERFORM',
      loading: true
    }))
    .then(searchRes =>
      dispatch({
        type: 'FETCH_VIDEO_INFO_SUCCESS',
        loading: false,
        videoStatistics: searchRes
      }))
    .catch(error => {
      dispatch({
        type: 'FETCH_VIDEO_INFO_ERROR',
        loading: false,
        error: true
      })
    })
  }
}
