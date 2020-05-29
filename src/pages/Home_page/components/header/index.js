import React, { Component } from "react";
import styles from "./style.module.css";
import header from "../../../../assets/header.jpg";
import headerMobile from "../../../../assets/header-mobile.jpg";
import SocialMedia from "./../../../../Shared-components/socialMedia/index";

export default class Header extends Component {
  render() {
    return (
      <div className={styles.header}>
        {window.innerWidth - 77 <= 700 ? (
          <img src={headerMobile} className={styles.header_background} alt="" />
        ) : (
          <img src={header} className={styles.header_background} alt="" />
        )}

        <div className={styles.header_container}>
          <h2 className={styles.header_title}>Hi I am Samaa Mohamed</h2>
          <p className={styles.header_job}>Front End Developer</p>
          <span>
            <SocialMedia isInHeader={true} className="flex-lg-column" />
          </span>
        </div>
      </div>
    );
  }
}
