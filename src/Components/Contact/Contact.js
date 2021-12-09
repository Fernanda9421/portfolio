import React, { Component } from 'react';
import ButtonEmail from '../ButtonEmail/ButtonEmail';
import ButtonWhatsapp from '../ButtonWhatsapp/ButtonWhatsapp';

class Contact extends Component {
  render() {
    return (
      <>
      <ButtonEmail />
      <ButtonWhatsapp />
      </>
    );
  }
}

export default Contact;
