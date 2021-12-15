import React, { Component } from "react";
import PropTypes from "prop-types";
import "./cardSkills.css";

class CardSkills extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card-art">
        <div className="text-center">
          <span className="name-skill">{skill.skill}</span>
        </div>
      </div>
    );
  }
}

export default CardSkills;

CardSkills.propTypes = {
  skill: PropTypes.object.isRequired,
};
