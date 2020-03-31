import React from "react";
import ArticleList from "../article-list";

const ArticlesPage = () => {
  const articles = [{id: 1, title: 'Awesome title 1'}, {id: 1, title: 'Awesome title 2'}];

  return <ArticleList articles={articles} />
};

export default ArticlesPage;