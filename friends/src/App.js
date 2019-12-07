import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "./App.css";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/dashboard">Friends</Link>
          </li>
        </ul>
        <h1>Friend List 2.0</h1>
      </div>
      <Switch>
        <PrivateRoute exact path="/dashboard" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
