import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "../pages/AboutPage";
import { HomePage } from "../pages/HomePage";
import React from "react";

export const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route component={HomePage} />
    </Switch>
  </Router>
);
