import axios from 'axios';

export const apiKey = 'AIzaSyA0vqgyHMVjEe9Og1f1uKMAKjtUAUls56c';

export function search(surfing) {
  return axios.get(`search?part=snippet&maxResults=25&type=video&key=${apiKey}&q=${surfing}`)
          .then((responce) => responce.data.items)
};

export function relatedVideo(id) {
  return axios.get(`search?part=snippet&maxResults=5&type=video&key=${apiKey}&relatedToVideoId=${id}`)
          .then((responce) => responce.data.items)
};

export function relatedComments(id) {
  return axios.get(`commentThreads?part=snippet%2Creplies&key=${apiKey}&videoId=${id}`)
          .then((responce) => responce.data.items)
};
