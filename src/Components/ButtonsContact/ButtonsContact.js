import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import SocialMidias from '../SocialMidias/SocialMidias';

class ButtonsContact extends Component {
  render() {
    return (
      <div className="d-grid gap-2 d-md-flex justify-content-center">
        <SocialMidias />
        <Contact />
      </div>
    );
  }
}

export default ButtonsContact;
