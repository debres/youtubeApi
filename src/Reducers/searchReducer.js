const initialState = {
  surfing: '',
  loading: false,
  videoItems: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SURFING_CHANGE':
      return {...state, surfing: action.surfing };
    case 'FETCH_DATA_PERFORM' :
      return {...state, loading: action.loading, error: action.error };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, loading: action.loading, videoItems: action.videItems };
    case 'FETCH_DATA_ERROR':
      return {...state, loading: action.loading, error: action.error };
    default:
      return state;
  }
}
