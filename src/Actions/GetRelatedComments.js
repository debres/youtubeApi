import { relatedComments } from './consts';

export function getRelatedComments(id) {
  return function (dispatch) {
    return relatedComments(id)
    .then(dispatch({
      type: 'FETCH_RELATED_COMMENTS_PERFORM',
      loading: true
    }))
    .then(searchRes =>
      dispatch({
        type: 'FETCH_RELATED_COMMENTS_SUCCESS',
        loading: false,
        commentItems: searchRes
      }))
    .catch(error => {
      dispatch({
        type: 'FETCH_RELATED_COMMENTS_ERROR',
        loading: false,
        error: true
      })
    })
  }
}
