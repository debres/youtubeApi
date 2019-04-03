const initialState = {
  relatedVideo: null,
  relatedComments: null
}

export default (state = initialState, action) => {
  switch (action.types) {
    case 'FETCH_DATA_ERROR':
      return {...state};
    case 'FETCH_DATA_SUCCESS':
      return { ...state}
    default:
      return state;
  }
}
