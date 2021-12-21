import React, { Component } from "react";
import projects from "../../../../Data/projects";
import CardProject from "../CardProject/CardProject";

class ProjectLlist extends Component {
  render() {
    return (
      <>
        {
          projects.map((project) => (
            <CardProject key={ project.id } project={ project } />
          ))
        }
      </>
    );
  }
}

export default ProjectLlist;
