import React, { Component } from "react";
import ListHardSkills from "../../../../Components/ListHardSkills/ListHardSkills";

class HardSkillsSection extends Component {
  render() {
    return (
      <div className="py-4 bg-light">
        <section className="py-5" id="features">
          <div className="container px-5 my-5">
            <div className="row gx-5">
              <div className="col-lg-4 mb-5 mb-lg-0 d-flex flex-column justify-content-center">
                <h2 className="fw-bolder mb-0">
                  <p><i className="bi bi-code" /></p>
                  Hard Skills
                </h2>
                <span className="d-flex mt-3">Habilidades Técnicas Desenvolvidas</span>
              </div>
              <div className="col-lg-8 list-hard-skills">
                <div className="row gx-5 row-cols-1 row-cols-md-3 d-flex justify-content-center">
                  <ListHardSkills />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HardSkillsSection;
