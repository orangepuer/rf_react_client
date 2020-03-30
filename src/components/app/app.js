import React from "react";
import "./app.css";
import {Route, Switch} from "react-router-dom";
import {ArticlesPage} from "../pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={ArticlesPage} />
    </Switch>
  )
};

export default App;