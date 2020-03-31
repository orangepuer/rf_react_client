const initialState = {
  articles: [{id: 1, title: 'Awesome title 1'}, {id: 2, title: 'Awesome title 2'}]
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