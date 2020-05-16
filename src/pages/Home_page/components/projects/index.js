import React, { Component } from "react";
import { getProjects } from "../../services/projects.service";
import styles from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ReactWOW from "react-wow";
import { Link } from "react-router-dom";

export default class Projects extends Component {
  state = {
    projects: null,
  };
  componentDidMount() {
    getProjects().then((response) => {
      this.setState({
        projects: response.data,
      });
    });
  }
  render() {
    return (
      <section className={styles.projects}>
        <h2 className={styles.projects_heading}>projects</h2>
        <div className="container">
          <div className="row">
            {this.state.projects ? (
              this.state.projects.map((projectItem, index) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-12"
                    id="projects"
                    key={index}
                  >
                    <ReactWOW
                      animation="fadeInUp"
                      duration={`${index ? index + 0.3 : 1.5}s`}
                      delay={`${index / 2}s`}
                    >
                      <div className={styles.projects_content}>
                        <h3 className={styles.projects_title}>
                          {projectItem.title}
                        </h3>
                        <p className={styles.body}>{projectItem.body}</p>
                        <div className={styles.projects_links}>
                          <Link to={projectItem.githubLink}>
                            {projectItem.githubLink && (
                              <FontAwesomeIcon
                                className={styles["projects-links_icon"]}
                                icon={faGithub}
                              />
                            )}
                          </Link>
                          <Link to={projectItem.previewLink}>
                            {projectItem.previewLink && (
                              <FontAwesomeIcon icon={faGlobe} />
                            )}
                          </Link>
                        </div>
                      </div>
                    </ReactWOW>
                  </div>
                );
              })
            ) : (
              <p className={styles.loading}>loading..</p>
            )}
          </div>
        </div>
      </section>
    );
  }
}
