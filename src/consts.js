import axios from 'axios';

const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';

export const search = (surfinsg) => {
  return axios.get(`search?part=snippet&maxResults=10&type=video&key=${apiKey}&q=${surfinsg}`);
};

export const relatedVideo = (id) => {
  return axios.get(`search?part=snippet&maxResults=5&type=video&key=${apiKey}&relatedToVideoId=${id}`);
};

export const relatedComments = (id) => {
  return axios.get(`commentThreads?part=snippet%2Creplies&key=${apiKey}&videoId=${id}`);
};
