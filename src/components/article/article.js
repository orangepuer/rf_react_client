import React, {Component} from "react";
import "./article.css";

class Article extends Component {
  render() {
    return (
      <div className="container">
        <h2>Article title</h2>
        <p className="article-content">Article content</p>
      </div>
    )
  }
}

export default Article;