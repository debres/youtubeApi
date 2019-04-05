import axios from 'axios';

const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';

export const search = (surfing) => {
  return axios.get(`search?part=snippet&maxResults=25&type=video&key=${apiKey}&q=`)
          .then((responce) => responce.data.items)
};

export const relatedVideo = (id) => {
  return axios.get(`search?part=snippet&maxResults=5&type=video&key=${apiKey}&relatedToVideoId=`)
          .then((responce) => responce.data.items)
};

export const relatedComments = (id) => {
  return axios.get(`commentThreads?part=snippet%2Creplies&key=${apiKey}&videoId=`)
          .then((responce) => responce.data.items)
};

export const makeRequest = () => dispatch => {
  return search()
    .then(dataRes =>
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        videItems: dataRes
      })
    ).catch(error => {
      dispatch({
        type: 'FETCH_DATA_ERROR',
        videItems: error
      })
    })
}
