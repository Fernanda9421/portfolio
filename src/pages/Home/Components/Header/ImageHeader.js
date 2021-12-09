import React, { Component } from "react";

class ImageHeader extends Component {
  render() {
    return (
      <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
        <img
          className="img-fluid rounded-3 my-5"
          src="https://dummyimage.com/600x400/343a40/6c757d"
          alt="..."
        />
      </div>
    );
  }
}

export default ImageHeader;
