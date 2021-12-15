import React, { Component } from "react";
import QualificationsSection from "./QualificationsSection";
import QualificationsTabs from "./QualificationsTabs";

class Qualifications extends Component {
  render() {
    return (
      <>
        <section className="py-3">
          <div className="container px-5 my-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-lg-8 col-xl-6">
                <div className="text-center">
                  <h2 className="fw-bolder">Qualificações</h2>
                  <p className="lead fw-normal text-muted mb-5">
                    Minha jornada até o momento.
                  </p>
                </div>
                <QualificationsTabs />
              </div>
            </div>
          </div>
        </section>
        <QualificationsSection />
      </>
    );
  }
}

export default Qualifications;
