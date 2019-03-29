const initialState = {
  serchedItems: []
};

const serchedVideos = (state = initialState, action ) => {
  switch (action.type) {
    case 'ITEMS_LOADED':
      return {
        serchedItems.payload
      }
      break;
    default:
      return state;
  }
};

export default serchedVideos;
