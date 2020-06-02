import React, {Component} from "react";
import "./new-article.css";
import {Link} from "react-router-dom";

class NewArticle extends Component {
  render() {
    return (
      <div className="container">
        <h1>
          Add a new article.
        </h1>
        <form>
          <div>
            <label htmlFor="articleTitle">Article title</label>
            <br/>
            <input
              id="articleTitle"
              type="text"
              name="title"
              required
            />
          </div>
          <div>
            <label htmlFor="articleContent">Article Content</label>
            <br/>
            <textarea
              id="articleContent"
              name="content"
              rows="5"
              required
            />
          </div>
          <button type="submit">
            Create Article
          </button>
        </form>
        <Link to="/">
          Back to articles
        </Link>
      </div>
    );
  }
}

export default NewArticle;