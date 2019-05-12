import axios from 'axios';

const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';

export function search(surfing) {
  return axios.get(`search?part=snippet&maxResults=25&type=video&key=${apiKey}&q=${surfing}`)
          .then((responce) => responce.data.items)
};

export function videoInfo(id) {
  return axios.get(`videos?part=snippet,contentDetails,statistics&key=${apiKey}&id=${id}`)
          .then((responce) => responce.data.items)
}

export function relatedVideo(id) {
  return axios.get(`search?part=snippet&maxResults=10&type=video&key=${apiKey}&relatedToVideoId=${id}`)
          .then((responce) => responce.data.items)
};

export function relatedComments(id) {
  return axios.get(`commentThreads?part=snippet%2Creplies&key=${apiKey}&videoId=${id}`)
          .then((responce) => responce.data.items)
};
