import React from "react";
import "./article-list-item.css";

const ArticleListItem = ({article}) => {
  return <span>{article.title}</span>
};

export default ArticleListItem;