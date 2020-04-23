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

export {articlesLoaded, articlesError};