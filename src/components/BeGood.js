import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import ApplicationViews from "./ApplicationViews";

function BeGood() {
  const user = null;
  return user ? (
    <Route>
      <NavBar />
      <ApplicationViews />
    </Route>
  ) : (
    <Route>
      <NavBar path="/" />
    </Route>
  );
}
export default BeGood;
