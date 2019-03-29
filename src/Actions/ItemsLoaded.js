const itemsLoaded = (newSearch) => {
  return {
    type: 'ITEMS_LOADED',
    payload: newSearch
  };
};

export {
  itemsLoaded
};
