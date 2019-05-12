const initialState = {
  loading: false,
  videoStatistics: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VIDEO_INFO_PERFORM' :
      return {...state, loading: action.loading};
    case 'FETCH_VIDEO_INFO_SUCCESS':
      return {...state, loading: action.loading, videoStatistics: action.videoStatistics };
    case 'FETCH_VIDEO_INFO_ERROR':
      return { ...state, loading: action.loading, error: action.error };
    default:
      return state;
  }
}
