const initialState = {
  articles: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ARTICLES_LOADED':
      return {
        articles: action.payload
      };

    default:
      return state;
  }
};

export default reducer;