import React from "react";
import Home from "./pages/Home_page";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ContactPage from "./pages/contacts";
import "./style.css"

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contacts" component={ContactPage} />
        </Switch>
      </Router>
      <footer>
        <div className="horizontal-line"></div>
        <p className="copyright py-4">Copyright © Samaa Mohamed 2020</p>
      </footer>
    </>
  );
}

export default App;
