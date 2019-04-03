import { createStore } from 'redux';
import rootReducer from './Reducers/rootReducer';
import initialState from './Reducers/rootReducer';

const store = createStore(rootReducer, initialState);

export default store;
