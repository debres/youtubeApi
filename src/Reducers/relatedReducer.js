const initialState = {
  relatedVideo: null,
  relatedComments: null,
  loading: false,
  error: false
}

export default (state = initialState, action) => {
  switch (action.types) {
    case 'FETCH_DATA_ERROR':
      return {...state, error: true};
    case 'FETCH_DATA_SUCCESS':
      return { ...state, relatedVideo: action.payload, relatedComments: action.payload}
    default:
      return state;
  }
}
