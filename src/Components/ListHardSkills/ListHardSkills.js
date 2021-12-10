import React, { Component } from "react";
import hardSkills from "../../Data/hardSkills";
import CardSkills from "../CardSkills/CardSkills";

class ListHardSkills extends Component {
  render() {
    return (
      <>
        {hardSkills.map((skill) => (
          <CardSkills key={ skill.skill } skill={ skill } />
        ))}
      </>
    );
  }
}

export default ListHardSkills;
