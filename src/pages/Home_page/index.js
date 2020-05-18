import React, { Component } from "react";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Contacts from "../contacts/component";
import Navbar from "./../../Shared-components/navbar/index";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contacts />
      </div>
    );
  }
}
