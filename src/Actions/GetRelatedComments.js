import { relatedComments } from './consts';

export function getRelatedComments(id) {
  return function (dispatch) {
    return relatedComments(id)
    .then(searchRes =>
      dispatch({
        type: 'FETCH_RELATED_COMMENTS_SUCCESS',
        commentItems: searchRes
      })
    ).catch(error => {
      dispatch({
        type: 'FETCH_RELATED_COMMENTS_ERROR',
        commentItems: error
      })
    })
  }
}
