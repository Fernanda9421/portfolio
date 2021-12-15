import React, { Component } from "react";
import ButtonsHeader from "./ButtonsHeader";
import HeaderDescription from "./HeaderDescription";
import ImageHeader from "./ImageHeader";

class Header extends Component {
  render() {
    return (
      <header className="bg-dark py-5">
        <div className="container px-5 mb-5 mt-5">
          <div className="row gx-5 align-items-center justify-content-center">
            <div className="col-lg-8 col-xl-7 col-xxl-6">
              <div className="my-5 text-center text-xl-start">
                <HeaderDescription />
                <ButtonsHeader />
              </div>
            </div>
            <ImageHeader />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
