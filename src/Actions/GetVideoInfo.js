import { videoInfo } from './consts';

export function getVideoInfo(id) {
  return function (dispatch) {
    return videoInfo(id)
    .then(searchRes =>
      dispatch({
        type: 'FETCH_INFO_SUCCESS',
        videoStatistics: searchRes
      })
    ).catch(error => {
      dispatch({
        type: 'FETCH_INFO_ERROR',
        videoStatistics: error
      })
    })
  }
}
