import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import App from "./components/app";
import ErrorBoundary from "./components/error-boundary";
import RfapiService from "./services/rfapi-service";
import {RfapiServiceProvider} from "./components/rfapi-service-context";
import store from "./store";

const rfapiService = new RfapiService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <RfapiServiceProvider value={rfapiService}>
        <Router>
          <App/>
        </Router>
      </RfapiServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);