const initialState = {
  videoItems: null,
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.types) {
    case 'FETCH_DATA_PERFORM':
      return { ...state, loading: true }
    case 'FETCH_DATA_ERROR':
      return {...state, error: true };
    case 'FETCH_DATA_SUCCESS':
      return { ...state, videoItems: action.payload }
    default:
      return state;
  }
}
