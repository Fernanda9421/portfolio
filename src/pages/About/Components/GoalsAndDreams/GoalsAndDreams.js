import React, { Component } from 'react'

class GoalsAndDreams extends Component {
  render() {
    return (
      <section className="py-5">
        <div className="container px-5 my-5">
          <div className="row gx-5 align-items-center">
            <div className="col-lg-6 order-first order-lg-last">
              <img
                className="img-fluid rounded mb-5 mb-lg-0"
                src="https://dummyimage.com/600x400/343a40/6c757d"
                alt="..."
              />
            </div>
            <div className="col-lg-6">
              <h2 className="fw-bolder">Objetivos &amp; Sonhos</h2>
              <p className="lead fw-normal text-muted mb-0">
                Objetivos
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GoalsAndDreams;
