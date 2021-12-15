import React, { Component } from "react";
import fer from "../../../../assets/images/fer.jpeg";

class ImageHeader extends Component {
  render() {
    return (
      <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
        <img
          className="img-fluid rounded-circle my-5"
          src={fer}
          alt="..."
        />
      </div>
    );
  }
}

export default ImageHeader;
