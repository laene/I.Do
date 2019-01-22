import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Manage from "./pages/Manage";
import Dashboard from "./pages/Dashboard"
import ErrorPage from "./pages/ErrorPage";
import Guest from "./pages/Guest";
import Nav from "./components/Nav";
import ColorMenu from "./components/ColorMenu"

function App() {
  
  return (
    <Router>
      <div>
          <ColorMenu/>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Guest" component={Guest} />
          <Route exact path="/Manage" component={Manage} />
          <Route exact path="/Dashboard"component={Dashboard} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
