import React from "react";
import Navbar from "./Shared-components/navbar";
import Home from "./pages/Home_page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from "./pages/contacts";

function App() {
  return (
    <Router>
        <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contacts"  component={ContactPage} />
      </Switch>
    </Router>
  );
}

export default App;
