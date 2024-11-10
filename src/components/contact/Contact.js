import React from "react";

const Contact = () => {
  return (
    <div className="container-main">
      <div className="container bb">
        <p className="h2 olkhov-regular d-flex justify-content-center">
          FASCO Demo Checkout
        </p>
        <div className="contact">
          <div className="col-6 bb">
            <p> Contact</p>
            <input
              type="text"
              placeholder="E-mail Address"
              className="col-12"
            />
          </div>
          <div className="col-6 bb">2</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
