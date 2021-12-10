import React, { Component } from "react";
import PropTypes from "prop-types";

class CardSkills extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="col mb-5 mt-5">
        <div className="text-center">
          <img
            className="mb-4 px-4 image-skill"
            src={skill.image}
            alt={skill.skill}
            width="180"
            height="70"
          />
          <h6 className="fw-light">{skill.skill}</h6>
        </div>
      </div>
    );
  }
}

export default CardSkills;

CardSkills.propTypes = {
  skill: PropTypes.object.isRequired,
};
