import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

import HomeRouter from "./HomeRouter";

import Login from "../pages/Login";
import Home from "../pages/Home";
import Character from "../pages/Character";

const Routes = () => {
  const { status } = useSelector((state) => state.login.userData);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (status) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }

    console.log(status);
  }, [status]);

  return (
    <Router>
      <Switch>
        <PublicRoutes
          exact
          isAuthenticated={isLoggedIn}
          path="/login"
          component={Login}
        />
        <PrivateRoutes
          isAuthenticated={isLoggedIn}
          path="/"
          component={HomeRouter}
        />

        <Redirect to={"/login"} />
      </Switch>
    </Router>
  );
};

export default Routes;
