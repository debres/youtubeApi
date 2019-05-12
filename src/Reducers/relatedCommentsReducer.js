const initialState = {
  loading: false,
  commentItems: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_COMMENTS_PERFORM':
      return {...state, loading: action.loading};
    case 'FETCH_RELATED_COMMENTS_SUCCESS':
      return { ...state, loading: action.loading, commentItems: action.commentItems};
    case 'FETCH_RELATED_COMMENTS_ERROR':
      return {...state, loading: action.loading, error: action.error};
    default:
      return state;
  }
}
