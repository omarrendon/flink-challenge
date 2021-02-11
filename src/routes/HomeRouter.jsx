import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Character from "../pages/Character";

import Home from "../pages/Home";

const HomeRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/character" component={Character} />

      {/* <Redirect to="/" /> */}
    </Switch>
  );
};

export default HomeRouter;
