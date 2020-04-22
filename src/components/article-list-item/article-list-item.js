import React from "react";
import "./article-list-item.css";

const ArticleListItem = ({article}) => {
  return (
    <section className="article">
      <img className="avatar" src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=retro&f=y&s=300"
           alt="avatar"/>
        <div className="article-body">
          <h3>{article.attributes.title}</h3>
          <p className="article-text">
            {article.attributes.content}
          </p>
          <p className="article-author">
            <a href="#"><i className="fa fa-github"></i></a>
            <span>Author</span>
          </p>
          <p className="article-new-comment">
            <i></i>
            <a href="#">Leave a comment here</a>
          </p>
        </div>
    </section>
  )
};

export default ArticleListItem;