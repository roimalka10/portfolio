import React from "react";
import "./sass/styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={Header} exact path="/" />
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
