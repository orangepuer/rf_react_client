import React, {Component} from "react";
import "./article.css";
import {articleLoaded, articlesError} from "../../actions";
import {WithRfapiService} from "../hoc";
import {connect} from "react-redux";

class Article extends Component {
  componentDidMount() {
    const {rfapiService, articleLoaded, articlesError, articleId} = this.props;

    rfapiService.getArticle(articleId)
      .then((data) => articleLoaded(data))
      .catch((error) => articlesError(error))
  }

  render() {
    const {article} = this.props;

    if (article) {
      return (
        <div className="container">
          <h2>{article.attributes.title}</h2>
          <p className="article-content">{article.attributes.content}</p>
        </div>
      )
    }

    return <div></div>
  }
}

const mapStateToProps = ({article}) => {
  return {article}
}

const mapDispatchToProps = {
  articleLoaded, articlesError
}

export default WithRfapiService()(connect(mapStateToProps, mapDispatchToProps)(Article));