import React, { Component } from "react";
import about_photo from "../../../../assets/about_image.jpg";
import styles from "./style.module.css";

export default class About extends Component {
  render() {
    return (
      <div className={styles.about}>
        <div className="container">
          <h2 className={styles.about_heading}>About Me</h2>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <img
                className={styles.about_photo}
                src={about_photo}
                alt="Image of Me"
              />
            </div>
            <div className="col-lg-8 col-md-6 col-sm-12">
              <div className={styles.about_content}>
                <h3 className={styles.about_title}>Who am I</h3>
                <p className={styles.about_paragraph}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Beatae, nam? Atque aliquid, itaque autem asperiores unde,
                  eveniet dolorem natus modi explicabo eum reiciendis quae enim
                  cupiditate iste, quidem quam. Tempora?
                </p>
                <a href="#" className={styles.about_cv}>
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
