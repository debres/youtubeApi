import search from '../consts';

export const serch = () => (dispatch) => {
  return search()
  .then(searchResponse => dispatch({
    type: 'SEARCH_ITEMS_SUCCESS',
    payload: searchResponse
  }))
  .catch(error => {dispatch({
    type: 'SEARCH_ITEMS_ERROR',
    payload: error
  })})
}
