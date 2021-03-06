import React from 'react';
import { Provider } from "react-redux";
import TopNav from './view/partial/top_nav.js';

import Page404 from './view/page/page_404.js';
import HomePage from './view/page/page_home.js';

import PageTest2 from './view/page/page_test2.js';
import PageKentico from './view/page/page_kentico.js';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom';

import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <TopNav/>
          <Switch>
            <Route
              path="/:lang/store"
              render={matchProps => (
                <PageTest2 {...matchProps} />
              )}
            />
            <Route
              path="/kentico"
              render={matchProps => <PageKentico {...matchProps} />}
            />
            <Route
              path="/404"
              render={matchProps => <Page404 {...matchProps} />}
            />
            <Route
              exact
              path="/"
              render={matchProps => <HomePage {...matchProps} />}
            />
            <Route
              path="*"
              render={() => {
                return <Redirect to="/404" push />;
              }}
            />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
