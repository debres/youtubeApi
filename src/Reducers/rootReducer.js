import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import videoInfoReducer from './videoInfoReducer';
import relatedVideoReducer from './relatedVideoReducer';
import relatedCommentsReducer from './relatedCommentsReducer';

export default combineReducers({
  search: searchReducer,
  videoInfo: videoInfoReducer,
  relatedVideo: relatedVideoReducer,
  relatedComments: relatedCommentsReducer
});
