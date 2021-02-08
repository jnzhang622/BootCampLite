import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";
import LessonPage from "./Components/LessonPage/LessonPage";
import './App.css';

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/lesson">
          <LessonPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
