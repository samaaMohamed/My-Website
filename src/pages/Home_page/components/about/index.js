import React, { Component } from "react";
import about_photo from "../../../../assets/about_image.jpg";
import styles from "./style.module.css";

export default class About extends Component {
  render() {
    return (
      <div id="about-section" className={styles.about}>
        <div className="container">
          <h2 className={styles.about_heading}>About Me</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className={styles.about_photo}
                src={about_photo}
                alt="You're looking at me now"
              />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className={styles.about_content}>
                <h3 className={styles.about_title}>Who am I</h3>
                <p className={styles.about_paragraph}>
                  I'm samaa mohamed,I live in cairo,I Study Computer and System
                  Engineering at AZhar University,I work as Front End Developer,
                  I built some projects This CV will view it and my journey in
                  web development.
                </p>
                <a href="./cv.pdf" className={styles.about_cv} download>
                  dawonload cv
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
