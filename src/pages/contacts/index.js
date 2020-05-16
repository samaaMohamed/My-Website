import React, { Component } from "react";
import Contacts from "./component";
import Navbar from "../../Shared-components/navbar";
import styles from "./style.module.css";

export default class ContactPage extends Component {
  render() {
    return (
      <>
        <section className={styles.ContactPage_nav}>
          <Navbar isInContact={true} />
        </section>
        <Contacts />
      </>
    );
  }
}
