import React, { Component } from "react";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactWOW from "react-wow";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../../../Shared-components/socialMedia";
import { sendMessage } from "../services/contact.service";

export default class Contacts extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    message: "",
    success: false,
    errorMsg: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let { name, email, phone, message } = this.state;

    if (
      name.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      message.length === 0
    ) {
      this.setState({ errorMsg: "Please fill all the fields !" });
    } else {
      sendMessage({ name, email, phone, message })
        .then((response) => {
          alert("Your message has been sent successfully");
          this.setState({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        })
        .catch((err) => {
          alert(err.response.data.msg);
        });
    }
  };
  render() {
    let { name, email, phone, message, errorMsg } = this.state;
    //   window.open(response.link)
    return (
      <>
        <section className={styles.contact}>
          <div className="container">
            <h2 className={styles.contact_heading}> Contact Me</h2>
            {errorMsg && (
              <span className="alert alert-danger d-block w-50">
                {errorMsg}
              </span>
            )}
            <div className="row mt-3">
              <div className="col-lg-7 col-md-12">
                <ReactWOW animation="fadeInLeft">
                  <form
                    onSubmit={this.handleSubmit}
                    className={styles.contact_form}
                  >
                    <input
                      className={styles["contact-form_control"]}
                      name="name"
                      type="text"
                      placeholder="Name"
                      onChange={this.handleChange}
                      value={name}
                    />
                    <input
                      className={styles["contact-form_control"]}
                      name="email"
                      type="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      value={email}
                    />
                    <input
                      className={styles["contact-form_control"]}
                      name="phone"
                      type="number"
                      placeholder="Phone"
                      onChange={this.handleChange}
                      value={phone}
                    />
                    <textarea
                      className={`${styles["contact-form_control"]} ${styles["contact-form-control_message"]}`}
                      name="message"
                      type="text"
                      placeholder="Type Your Message"
                      onChange={this.handleChange}
                      value={message}
                    ></textarea>
                    <button
                      className={styles["cotact-form_submit"]}
                      type="submit"
                    >
                      Send
                    </button>
                  </form>
                </ReactWOW>
              </div>
              <div className="col-lg-5 col-md-12">
                <ReactWOW animation="fadeInRight">
                  <div className={styles.pesonal_contact}>
                    <div className={styles["pesonal-contact_email"]}>
                      <FontAwesomeIcon
                        className={styles["pesonal-contact_icon"]}
                        icon={faEnvelope}
                        // size="lg"
                      />
                      <a href="mailto:samaamohammed@gmail.com">
                        <span>samaamohammed@gmail.com</span>
                      </a>
                    </div>
                    <div className={styles["pesonal-contact_phone"]}>
                      <FontAwesomeIcon
                        className={styles["pesonal-contact_icon"]}
                        icon={faPhoneAlt}
                        // size="lg"
                      />
                      <a href="tel:01234567892">
                        <span>01234567892</span>
                      </a>
                    </div>
                    <SocialMedia />
                  </div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <footer>
          <p className={styles.copyright}>Copyright © Samaa Mohamed 2020</p>
        </footer>
      </>
    );
  }
}
