import React, { Component } from "react";
import PropTypes from "prop-types";

class CardSkills extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card-art">
        <div className="text-center">
          <h6 className="name-skill">{skill.skill}</h6>
        </div>
      </div>
    );
  }
}

export default CardSkills;

CardSkills.propTypes = {
  skill: PropTypes.object.isRequired,
};
