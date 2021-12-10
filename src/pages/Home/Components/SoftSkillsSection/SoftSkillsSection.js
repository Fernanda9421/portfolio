import React, { Component } from "react";
import ListSoftSkills from "../../../../Components/ListSoftSkills/ListSoftSkills";

class SoftSkillsSection extends Component {
  render() {
    return (
      <section className="py-5" id="features">
        <div className="container px-5 my-5">
          <div className="row gx-5">
            <div className="col-lg-8 list-hard-skills">
              <div className="row gx-5 row-cols-1 row-cols-md-3 d-flex justify-content-center">
                <ListSoftSkills />
              </div>
            </div>
            <div className="col-lg-4 mb-5 mb-lg-0 d-flex flex-column justify-content-center">
              <h2 className="fw-bolder mb-0">
                Soft Skills
              </h2>
              <span className="d-flex mt-3">Habilidades Comportamentais Desenvolvidas</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SoftSkillsSection;
