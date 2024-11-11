import React from "react";
import homer from "../../assets/home/homer.png";
const Contact = () => {
  return (
    <div className=" ">
      <h2 className="h2 olkhov-regular d-flex justify-content-center col-12 contact-underlined">
        FASCO Demo Checkout
      </h2>
      <div className="container-main">
        <div className="container ">
          <div className="contact col-12 row">
            <div className="col-lg-6 col-sm-12 contact-form">
              <p className="c-gray volkhov-regular h1">Contact</p>
              <input
                type="email"
                placeholder="Your e-mail Address:"
                className="col-12"
              />
              <input type="test" placeholder="Name:" className="col-12" />
              <textarea
                type="email"
                placeholder="Your question:"
                className="col-12"
              />
              <div className="col-12 contact-submit">
                <button className="button-b col-5">Send message</button>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 contact-image ">
              <img className="col-5" src={homer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
