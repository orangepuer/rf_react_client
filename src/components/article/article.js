import React, {Component} from "react";
import "./article.css";
import {articleLoaded, articlesError} from "../../actions";
import {WithRfapiService} from "../hoc";
import {connect} from "react-redux";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class Article extends Component {
  componentDidMount() {
    const {rfapiService, articleLoaded, articlesError, articleId} = this.props;

    rfapiService.getArticle(articleId)
      .then((data) => articleLoaded(data))
      .catch((error) => articlesError(error))
  }

  render() {
    const {article, loading, error} = this.props;

    if (loading) {
      return <Spinner />
    }

    if (error) {
      return <ErrorIndicator />
    }

    if (article) {
      return (
        <div className="container">
          <h2>{article.attributes.title}</h2>
          <p className="article-content">{article.attributes.content}</p>
        </div>
      )
    }
  }
}

const mapStateToProps = ({article, loading, error}) => {
  return {article, loading, error}
}

const mapDispatchToProps = {
  articleLoaded, articlesError
}

export default WithRfapiService()(connect(mapStateToProps, mapDispatchToProps)(Article));