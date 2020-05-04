const articleLoaded = (article) => {
  return {
    type: 'FETCH_ARTICLE_SUCCESS',
    payload: article
  }
}

const articlesLoaded = (articles) => {
  return {
    type: 'FETCH_ARTICLES_SUCCESS',
    payload: articles
  }
};

const articlesError = (error) => {
  return {
    type: 'FETCH_ARTICLES_FAILURE',
    payload: error
  }
}

const fetchArticles = (rfapiService, dispatch) => () => {
  rfapiService.getArticles()
      .then((data) => dispatch(articlesLoaded(data)))
      .catch((error) => dispatch(articlesError(error)));
}

export {articleLoaded, articlesError, fetchArticles};