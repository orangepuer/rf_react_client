import React from "react";
import "./app.css";
import {Route, Switch} from "react-router-dom";
import {ArticlesPage} from "../pages";
import Header from "../header";

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={ArticlesPage} exact />
      </Switch>
    </div>
  )
};

export default App;