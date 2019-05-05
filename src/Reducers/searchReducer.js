const initialState = {
  surfing: '',
  videoItems: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SURFING_CHANGE':
      return {...state, surfing: action.surfing }
    case 'FETCH_DATA_ERROR':
      return {...state, error: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, videoItems: action.videItems }
    default:
      return state;
  }
}
