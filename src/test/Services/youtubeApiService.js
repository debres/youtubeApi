import axios from 'axios';

export const apiKey = 'AIzaSyA0vqgyHMVjEe9Og1f1uKMAKjtUAUls56c';

function doSearch(surfing) {
  axios.get(`search?part=snippet&maxResults=25&type=video&key=${apiKey}&q=${surfing}`)
        .then((responce) => responce.data.items)
        .then(searchRes =>
          dispatch({
            type: 'FETCH_DATA_SUCCESS',
            videItems: searchRes
        }))
        .catch(error => {
          dispatch({
            type: 'FETCH_DATA_ERROR',
            videItems: error
          })
        })
}


function getRelatedVideo(id) {
   axios.get(`search?part=snippet&maxResults=5&type=video&key=${apiKey}&relatedToVideoId=${id}`)
        .then((responce) => responce.data.items)
        .then(searchRes =>
          dispatch({
            type: 'FETCH_DATA_SUCCESS',
            videItems: searchRes
        }))
        .catch(error => {
          dispatch({
            type: 'FETCH_DATA_ERROR',
            videItems: error
          })
        })
};

function getRelatedComments(id) {
  axios.get(`commentThreads?part=snippet%2Creplies&key=${apiKey}&videoId=${id}`)
        .then((responce) => responce.data.items)
        .then(searchRes =>
          dispatch({
            type: 'FETCH_DATA_SUCCESS',
            videItems: searchRes
        }))
        .catch(error => {
          dispatch({
            type: 'FETCH_DATA_ERROR',
            videItems: error
          })
        })
};

export {
  doSearch,
  getRelatedVideo,
  getRelatedComments
}
