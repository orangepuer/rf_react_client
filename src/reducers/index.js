const initialState = {
  articles: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ARTICLES_LOADED':
      return {
        articles: action.payload,
        error: null
      };

    case 'ARTICLES_ERROR':
      return {
        articles: [],
        error: action.payload
      }

    default:
      return state;
  }
};

export default reducer;