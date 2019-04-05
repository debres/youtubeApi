import {relatedVideo,
        relatedComments} from '../consts';

export const getRelatedVideo = () => dispatch => {
  return relatedVideo()
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

export const getRelatedComments = () => dispatch => {
  return relatedComments()
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
