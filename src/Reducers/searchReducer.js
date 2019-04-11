const initialState = {
  videoItems: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_ERROR':
      return {...state, error: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, videoItems: action.videItems }
    default:
      return state;
  }
}
