import React from "react";
import "./app.css";
import {Route, Switch} from "react-router-dom";
import {ArticlesPage} from "../pages";
import Header from "../header";
import Article from "../article";
import NewArticle from "../new-article";

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ArticlesPage} exact />
        <Route path="/articles/new" exact component={NewArticle} />
        <Route path="/articles/:id" render={({match}) => {
          const {id} = match.params;
          return <Article articleId={id} />
        }} exact />
      </Switch>
    </div>
  )
};

export default App;