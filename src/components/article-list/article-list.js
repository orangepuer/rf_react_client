import React, {Component} from "react";
import "./article-list.css";
import ArticleListItem from "../article-list-item";
import {connect} from "react-redux";
import {articlesLoaded, articlesError} from "../../actions";
import {WithRfapiService} from "../hoc";
import ErrorIndicator from "../error-indicator";

class ArticleList extends Component {
  componentDidMount() {
    const {rfapiService, articlesLoaded, articlesError} = this.props;

    rfapiService.getArticles().then((data) => articlesLoaded(data)).catch((error) => articlesError(error))
  }

  render() {
    const {articles, error} = this.props;

    if (error) {
      return <ErrorIndicator/>
    }

    return (
      <main className="container">
        {
          articles.map((article) => {
            return <div key={article.id}><ArticleListItem article={article}/></div>
          })
        }
      </main>
    )
  }
}

const mapStateToProps = ({articles, error}) => {
  return {articles, error}
};

const mapDispatchToProps = {
  articlesLoaded,
  articlesError
};

export default WithRfapiService()(connect(mapStateToProps, mapDispatchToProps)(ArticleList));