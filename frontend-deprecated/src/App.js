import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import "./App.scss";

import { UserProvider } from './context/UserProvider';

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">Carregando...</div>
);

// Containers
const MainPage = Loadable({
  loader: () => import("./views/MainPage"),
  loading
});

class App extends Component {
  render() {
    return (
      <UserProvider>
        <HashRouter>
          <Switch>
            <Route path="/" name="Home" component={MainPage} />
          </Switch>
        </HashRouter>
      </UserProvider>
    );
  }
}

export default App;
