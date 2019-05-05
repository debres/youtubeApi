import { relatedVideo } from './consts';

export function getRelatedVideo(id) {
  return function (dispatch) {
    return relatedVideo(id)
    .then(searchRes =>
      dispatch({
        type: 'FETCH_RELATED_VIDEO_SUCCESS',
        relatedVideoItems: searchRes
      })
    ).catch(error => {
      dispatch({
        type: 'FETCH_RELATED_VIDEO_ERROR',
        relatedVideoItems: error
      })
    })
  }
}
