import React from "react";
import "./app.css";
import {WithRfapiService} from "../hoc";

const App = ({rfapiService}) => {
  console.log(rfapiService.getArticles());
  return (
    <div>App</div>
  )
};

export default WithRfapiService()(App);