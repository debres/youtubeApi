import axios from 'axios';

export const apiKey = 'AIzaSyAiz9Xy2w4P8wKwiu0aJZ5v2Es90E42K2g';

export const search = () => {
  return axios.get(`search?part=snippet&maxResults=10&type=video&key=${apiKey}&q=`);
};

export const relatedVideo = () => {
  return axios.get(`search?part=snippet&maxResults=5&type=video&key=${apiKey}&relatedToVideoId=`);
};

export const relatedComments = () => {
  return axios.get(`commentThreads?part=snippet%2Creplies&key=${apiKey}&videoId=`);
};
