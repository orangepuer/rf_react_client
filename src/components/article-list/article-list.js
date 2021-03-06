import React, {Component} from "react";
import "./article-list.css";
import ArticleListItem from "../article-list-item";
import {connect} from "react-redux";
import {fetchArticles} from "../../actions";
import {WithRfapiService} from "../hoc";
import ErrorIndicator from "../error-indicator";

const ArticleList = ({articles}) => {
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

class ArticleListContainer extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const {articles, error} = this.props;

    if (error) {
      return <ErrorIndicator/>
    }

    return <ArticleList articles={articles} />
  }
}

const mapStateToProps = ({articles, error}) => {
  return {articles, error}
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { rfapiService } = ownProps;

  return {
    fetchArticles: fetchArticles(rfapiService, dispatch)
  }
};

export default WithRfapiService()(connect(mapStateToProps, mapDispatchToProps)(ArticleListContainer));