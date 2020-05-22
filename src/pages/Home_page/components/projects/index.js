import React, { Component } from "react";
import { getProjects } from "../../services/projects.service";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactWOW from "react-wow";
import { Facebook } from "react-content-loader";

export default class Projects extends Component {
  state = {
    projects: null,
  };
  componentDidMount() {
    this.setState({ isLoading: true });
    getProjects().then((response) => {
      this.setState({
        projects: response.data,
        isLoading: false,
      });
    });
  }
  render() {
    return (
      <section id="projects-section" className={styles.projects}>
        <h2 className={styles.projects_heading}>projects</h2>
        <div className="container">
          <div className="row">
            {!this.state.isLoading &&
            this.state.projects &&
            this.state.projects.length > 0 ? (
              this.state.projects.map((projectItem, index) => {
                return (
                  <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                    <ReactWOW
                      animation="fadeInUp"
                      duration={`${index ? index + 0.2 : 1.5}s`}
                      delay={`${index / 5}s`}
                    >
                      <div className={styles.projects_content}>
                        <h3 className={styles.projects_title}>
                          {projectItem.title}
                        </h3>
                        <p className={styles.body}>{projectItem.body}</p>
                        <div className={styles.projects_links}>
                          <a
                            href={projectItem.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {projectItem.githubLink && (
                              <FontAwesomeIcon
                                className={styles["projects-links_icon"]}
                                icon={faGithub}
                              />
                            )}
                          </a>
                          <a
                            href={projectItem.previewLink}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {projectItem.previewLink && (
                              <FontAwesomeIcon icon={faGlobe} />
                            )}
                          </a>
                        </div>
                      </div>
                    </ReactWOW>
                  </div>
                );
              })
            ) : this.state.isLoading ? (
              <div className="d-flex justify-content-center">
                <Facebook
                  title="Loading projects ..."
                  foregroundColor="#333"
                  backgroundColor="#223364"
                />
              </div>
            ) : (
              <div className="d-flex justify-content-center">
                No Projects yet
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
}
