import React, { Component } from "react";
import Modal from "../Modal/Modal";

class ButtonEmail extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };
  }

  render() {
    const { isOpen } = this.state;
    return (
      <>
      <button
          type="button"
          className="btn btn-ligth"
          onClick={() => this.setState({ isOpen: true })}
        >
          <h2><i className="bi bi-envelope-check"></i></h2>
        </button>
        <Modal isOpen={isOpen} onClickClose={() => this.setState({ isOpen: false })}>
          <h3 className="text-center">Email para contato</h3>
          <hr />
          <h5 className="text-center pt-4 pb-2"><em>fer.candrade21@gmail.com</em></h5>
        </Modal>
        </>
    );
  }
}

export default ButtonEmail;
