import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 10) {
        if (this.navElement)
          this.navElement.classList.add(styles["navbar-scrolled"]);
      } else {
        if (this.navElement)
          this.navElement.classList.remove(styles["navbar-scrolled"]);
      }
    });
  }

  render() {
    return (
      <nav
        className={`${this.props.isInContact && styles.nav_bg}
        ${
          styles.nav
        } navbar navbar-expand-lg fixed-top bg-transparent w-100 p-0`}
        ref={(el) => (this.navElement = el)}
      >
        {/* <div className="container"> */}
        <h1 className={`navbar-brand ml-2 ml-md-5 ${styles.logo}`}>
          <Link to="/" className={styles.logo__link}>Samaa</Link>
        </h1>
        <button
          className={`navbar-toggler ${styles.toggler}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div
          className={`collapse navbar-collapse ${styles.navigation_list}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto mr-5">
            <li className="nav-item active p-2">
              <Link
                to="/"
                className={`${styles.item} nav-link`}
                onClick={() => window.scrollTo(0, 0)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item p-2">
              <a className={`${styles.item} nav-link`} href="/#about-section">
                About
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                className={`${styles.item} nav-link`}
                href="/#projects-section"
                tabIndex={-1}
                aria-disabled="true"
              >
                Projects
              </a>
            </li>
            <li className="nav-item p-2">
              <Link className={`${styles.item} nav-link`} to="/contacts">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* </div> */}
      </nav>
    );
  }
}
