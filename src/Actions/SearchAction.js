import { search } from './consts';

export function doSearch(surfing) {
  return function (dispatch) {
    return search(surfing)
    .then(dispatch({
      type: 'FETCH_DATA_PERFORM',
      loading: true,
      error: false
    }))
    .then(searchRes =>
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        videItems: searchRes,
        loading: false
      }))
    .catch(error => {
      dispatch({
        type: 'FETCH_DATA_ERROR',
        loading: false,
        error: true
      })
    })
  }
}
