import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./style.module.css";

export default class SocialMedia extends Component {
  render() {
    return (
      <div className={styles.socialMedia}>
        <ul className={`list-unstyled d-flex ${this.props.className}`}>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100011046726336"
              target="_blank"
            >
              <FontAwesomeIcon
                className={`${styles.socialMedia_Facebook} ${styles.icon}  ${
                  this.props.isInHeader && styles.header_icon
                }`}
                icon={faFacebookF}
              />
            </a>
          </li>

          <li>
            <a href="https://twitter.com/Sama35892367" target="_blank">
              <FontAwesomeIcon
                className={`${styles.socialMedia_twitter} ${styles.icon}  ${
                  this.props.isInHeader && styles.header_icon
                }`}
                icon={faTwitter}
              />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/samaaMohamed?tab=repositories"
              target="_blank"
            >
              <FontAwesomeIcon
                className={`${styles.socialMedia_github} ${styles.icon}  ${
                  this.props.isInHeader && styles.header_icon
                }`}
                icon={faGithub}
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/sama-mohamed-a076a5167/"
              target="_blank"
            >
              <FontAwesomeIcon
                className={`${styles.socialMedia_linkedin} ${styles.icon}  ${
                  this.props.isInHeader && styles.header_icon
                }`}
                icon={faLinkedin}
              />
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
