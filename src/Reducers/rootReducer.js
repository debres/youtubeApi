import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import relatedVideoReducer from './relatedVideoReducer';
import relatedCommentsReducer from './relatedCommentsReducer';

export default combineReducers({
  search: searchReducer,
  relatedVideo: relatedVideoReducer,
  relatedComments: relatedCommentsReducer
});
