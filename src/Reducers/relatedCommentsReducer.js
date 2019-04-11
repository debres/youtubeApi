const initialState = {
  relatedComments: null,
  error: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_RELATED_COMMENTS_ERROR':
      return {...state, error: true};
    case 'FETCH_RELATED_COMMENTS_SUCCESS':
      return { ...state, relatedComments: action.relatedComments}
    default:
      return state;
  }
}
