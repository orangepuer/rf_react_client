import React, {Component} from "react";
import "./article-list.css";
import ArticleListItem from "../article-list-item";
import {connect} from "react-redux";
import {articlesLoaded, articlesError} from "../../actions";
import {WithRfapiService} from "../hoc";
import ErrorIndicator from "../error-indicator";

class ArticleList extends Component {
  componentDidMount() {
    this.props.fetchArticles();
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { rfapiService } = ownProps;

  return {
    fetchArticles: () => {
      rfapiService.getArticles()
          .then((data) => dispatch(articlesLoaded(data)))
          .catch((error) => dispatch(articlesError(error)));
    }
  }
};

export default WithRfapiService()(connect(mapStateToProps, mapDispatchToProps)(ArticleList));