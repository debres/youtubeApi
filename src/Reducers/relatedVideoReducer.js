const initialState = {
  loading: false,
  relatedVideoItems: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_VIDEO_PERFORM':
      return {...state, loading: action.loading}
    case 'FETCH_RELATED_VIDEO_SUCCESS':
      return { ...state, loading: action.loading, relatedVideoItems: action.relatedVideoItems };
    case 'FETCH_RELATED_VIDEO_ERROR':
      return {...state, loading: action.loading, error: action.error};
    default:
      return state;
  }
}
