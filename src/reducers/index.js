const initialState = {
  article: null,
  articles: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLE_SUCCESS':
      return {
        article: action.payload,
        articles: [],
        loading: false,
        error: null
      }

    case 'FETCH_ARTICLES_SUCCESS':
      return {
        article: null,
        articles: action.payload,
        loading: false,
        error: null
      };

    case 'FETCH_ARTICLES_FAILURE':
      return {
        article: null,
        articles: [],
        loading: false,
        error: action.payload
      }

    default:
      return state;
  }
};

export default reducer;