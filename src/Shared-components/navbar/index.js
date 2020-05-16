import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 50) {
        this.navElement.classList.add(styles["navbar-scrolled"]);
      } else {
        this.navElement.classList.remove(styles["navbar-scrolled"]);
      }
    });
  }
  scrollTOProjects = () => {
    window.scrollTo(0, 1000);
  };
  render() {
    return (
      <nav
        className={`${this.props.isInContact && styles.nav_bg}
        ${styles.nav} navbar navbar-expand-lg fixed-top bg-transparent`}
        ref={(el) => (this.navElement = el)}
      >
        <div className="container">
          <h1 className={`navbar-brand ${styles.logo}`}>Samaa</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className={`${styles.item} nav-link`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <a className={`${styles.item} nav-link`} href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`${styles.item} nav-link`}
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                  onClick={this.scrollTOProjects}
                >
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <Link className={`${styles.item} nav-link`} to="/contacts">
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
