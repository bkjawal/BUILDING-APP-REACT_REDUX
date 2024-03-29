import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import NotFoundPage from "./NotFoundPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";

const App = () => (
  <div className="container-fluid">
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/courses" component={CoursesPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
);

export default App;
