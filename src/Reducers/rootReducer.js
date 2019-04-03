import { combineReducers } from 'redux';
import searchReducer from './searchReducer';
import relatedReducer from './relatedReducer';

export default combineReducers({
  search: searchReducer,
  related: relatedReducer
});
