import { search } from '../consts';

export const makeRequest = () => dispatch => {
  return search()
    .then(dataRes =>
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: dataRes
      })
    ).catch(error => {
      dispatch({
        type: 'FETCH_DATA_ERROR',
        payload: error
      })
    })
}
