import React, { Component } from "react";
import softSkills from "../../Data/softSkills";
import CardSkills from "../CardSkills/CardSkills";

class ListSoftSkills extends Component {
  render() {
    return (
      <>
        {
          softSkills.map((skill) => (
            <CardSkills key={ skill.id } skill={ skill } />
          ))
        }
      </>
    );
  }
}

export default ListSoftSkills;
