const initialState = {
  videoStatistics: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_INFO_ERROR':
      return {...state, error: true };
    case 'FETCH_INFO_SUCCESS':
      return { ...state, videoStatistics: action.videoStatistics }
    default:
      return state;
  }
}
