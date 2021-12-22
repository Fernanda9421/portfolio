import React, { Component } from "react";
import PropTypes from "prop-types";
import "./cardProject.css";

class CardProject extends Component {
  render() {
    const { project } = this.props;

    return (
      <div className="col-lg-6 d-flex justify-content-center">
        <div className="position-relative mb-5">
          <img
            className="rounded-3 mb-3 card__image"
            src={project.image}
            alt={project.name}
          />
          <h2 className="text-muted cardProject__title">{project.name}</h2>
          <div className="mt-4 cardProject__links">
            <a
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              <h3><i className="text-muted bi bi-github" /></h3>
            </a>
            <a
              className="cardProject__linkProject"
              href={project.link}
              rel="noreferrer"
              target="_blank"
            >
              Ver Projeto <i className="bi bi-chevron-double-right" />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default CardProject;

CardProject.propTypes = {
  project: PropTypes.object.isRequired,
};
