import React, {Component} from "react";
import "./article-list.css";
import ArticleListItem from "../article-list-item";
import {connect} from "react-redux";

class ArticleList extends Component {
  render() {
    const {articles} = this.props;

    return (
      <ul>
        {
          articles.map((article) => {
            return <li key={article.id}><ArticleListItem article={article}/></li>
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = ({articles}) => {
  return {articles}
};

export default connect(mapStateToProps)(ArticleList);