import { search } from './consts';

export function doSearch(surfing) {
  return function (dispatch) {
    return search(surfing)
    .then(searchRes =>
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        videItems: searchRes
      })
    ).catch(error => {
      dispatch({
        type: 'FETCH_DATA_ERROR',
        videItems: error
      })
    })
  }
}
