import React, { Component } from 'react';
import Modal from '../Modal/Modal';

class ButtonWhatsapp extends Component {
  constructor() {
    super();

    this.state = {
      isOpenWpp: false,
    };
  }

  render() {
    const { isOpenWpp } = this.state;
    return (
      <>
        <button
          type="button"
          className="btn btn-ligth"
          onClick={() => this.setState({ isOpenWpp: true })}
        >
          <h2><i class="bi bi-whatsapp"></i></h2>
        </button>
        <Modal isOpen={isOpenWpp} onClickClose={() => this.setState({ isOpenWpp: false })}>
          <h3 className="text-center">Número para contato</h3>
          <hr />
          <h5 className="text-center pt-4 pb-2"><em>(35) 99206 8181</em></h5>
        </Modal>
        </>
    );
  }
}

export default ButtonWhatsapp;
