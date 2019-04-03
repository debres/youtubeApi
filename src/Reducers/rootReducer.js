import { apiKey } from '../consts';

export const initialState = {
  apiKey: apiKey,
  surfing: '',
  videoItems: null,
  relatedVideo: null,
  relatedComments: null
};

const rootReduser = (state = initialState, action ) => {
  console.log(state, action);
  console.log("The action fire off");
  return state
};

export default rootReduser;
