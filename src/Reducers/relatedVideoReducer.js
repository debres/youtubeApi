const initialState = {
  relatedVideo: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_VIDEO_ERROR':
      return {...state, error: true};
    case 'FETCH_RELATED_VIDEO_SUCCESS':
      return { ...state, relatedVideo: action.relatedVideo }
    default:
      return state;
  }
}
