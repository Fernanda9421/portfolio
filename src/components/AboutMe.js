import React, { Component } from 'react'

class AboutMe extends Component {
  render() {
    return (
      <header className="py-5">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xxl-12">
              <div className="my-5">
                <h1 className="fw-bolder mb-3">Sobre mim</h1>
                <p className="lead fw-normal text-muted mb-4">
                  Breve apresentação pessoal
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default AboutMe;
