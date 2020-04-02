import React, {Component} from "react";
import "./article-list.css";
import ArticleListItem from "../article-list-item";
import {connect} from "react-redux";
import {articlesLoaded} from "../../actions";
import {WithRfapiService} from "../hoc";

class ArticleList extends Component {
  componentDidMount() {
    const {rfapiService, articlesLoaded} = this.props;
    const articles = rfapiService.getArticles();

    articlesLoaded(articles);
  }

  render() {
    const {articles} = this.props;

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

const mapStateToProps = ({articles}) => {
  return {articles}
};

const mapDispatchToProps = {
  articlesLoaded
};

export default WithRfapiService()(connect(mapStateToProps, mapDispatchToProps)(ArticleList));