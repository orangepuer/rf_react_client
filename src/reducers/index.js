const initialState = {
  articles: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_SUCCESS':
      return {
        articles: action.payload,
        error: null
      };

    case 'FETCH_ARTICLES_FAILURE':
      return {
        articles: [],
        error: action.payload
      }

    default:
      return state;
  }
};

export default reducer;