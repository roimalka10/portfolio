import React from "react";
import "./sass/styles.scss";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route component={Header} exact path="/" />
          <Route component={Contact} exact path="#contact">
            <Contact />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
