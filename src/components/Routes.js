import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Results } from "./Results";
export const Routes = () => {
  return (
    <nav className="p-4 border-b">
      <Switch>
        <Route exact path="/">
          <Redirect to="/search" />
        </Route>
        <Route exact path={["/search", "/image", "/news", "/video"]}>
          <Results />
        </Route>
      </Switch>
    </nav>
  );
};
