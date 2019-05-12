import { relatedVideo } from './consts';

export function getRelatedVideo(id) {
  return function (dispatch) {
    return relatedVideo(id)
    .then(dispatch({
      type: 'FETCH_RELATED_VIDEO_PERFORM',
      loading: true
    }))
    .then(searchRes =>
      dispatch({
        type: 'FETCH_RELATED_VIDEO_SUCCESS',
        loading: false,
        relatedVideoItems: searchRes
      }))
    .catch(error => {
      dispatch({
        type: 'FETCH_RELATED_VIDEO_ERROR',
        loading: false,
        error: true
      })
    })
  }
}
