import React, { Component } from 'react'

export class SocialMidias extends Component {
  render() {
    return (
      <>
        <button type="button" className="btn btn-ligth">
          <a
            href="https://www.linkedin.com/in/fernandaacarvalho/"
            rel="noreferrer" target="_blank">
            <h2><i class="bi bi-linkedin" /></h2>
          </a>
        </button>
        <button type="button" className="btn btn-ligth">
          <a
            href="https://github.com/Fernanda9421"
            rel="noreferrer" target="_blank">
            <h2><i class="bi bi-github" /></h2>
          </a>
        </button>
      </>
    )
  }
}

export default SocialMidias;
