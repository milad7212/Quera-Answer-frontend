import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";
import NotFound from "./NotFound";
export default function App() {
  // your code here ...
  return (
    <>
      <Router>
        <Switch>
          
        <Route path="/">
            <MovieDetail />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
         
        </Switch>
      </Router>
    </>
  );
}
