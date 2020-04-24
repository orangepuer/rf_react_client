const articlesLoaded = (articles) => {
  return {
    type: 'ARTICLES_LOADED',
    payload: articles
  }
};

const articlesError = (error) => {
  return {
    type: 'ARTICLES_ERROR',
    payload: error
  }
}

const fetchArticles = (rfapiService, dispatch) => () => {
  rfapiService.getArticles()
      .then((data) => dispatch(articlesLoaded(data)))
      .catch((error) => dispatch(articlesError(error)));
}

export {fetchArticles};