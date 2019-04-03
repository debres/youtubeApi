const initialState = {
  surfing: '',
  videoItems: [],
  loading: false,
  error: false
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
