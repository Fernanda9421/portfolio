import React, { Component } from "react";
import fernanda from "../../../../assets/images/fernanda.jpeg";

class TestimonialSection extends Component {
  render() {
    return (
      <div className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-7">
              <div className="text-center">
                <div className="fs-4 mb-4 fst-italic">
                  `Frase Motivacional ... alguém lembra alguma???`
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <img
                    className="rounded-circle me-3"
                    src={fernanda}
                    alt="..."
                    width="150"
                  />
                  <div className="fw-bold">
                    Fernanda Andrade de Carvalho
                    <span className="fw-bold text-success mx-1">/</span>
                    Estudante de Desenvolvimento Web
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestimonialSection;
