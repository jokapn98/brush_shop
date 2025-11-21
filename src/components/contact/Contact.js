import React from "react";
import home from "../../assets/home/homer.png";
import contat from "../../assets/contact/contact.png";

const Contact = () => {
  return (
    <div className=" ">
      <h2 className="h2 olkhov-regular d-flex justify-content-center col-12 contact-underlined">
        FASCO Demo Checkout
      </h2>
      <div className="container-main">
        <div className="container ">
          <div className="contact col-12 row">
            <form
              className="col-lg-6 col-sm-12 contact-form"
              action="https://formspree.io/f/mrbjnajj"
              method="POST"
            >
              <p className="c-gray volkhov-regular h1">Contact</p>

              <input
                type="email"
                name="email"
                placeholder="Your e-mail Address:"
                className="col-12"
                required
              />

              <input
                type="text"
                name="name"
                placeholder="Name:"
                className="col-12"
                required
              />

              <textarea
                name="message"
                placeholder="Your question:"
                className="col-12"
                required
              ></textarea>

              <div className="col-12 contact-submit">
                <button className="button-b col-5" type="submit">
                  Send message
                </button>
              </div>
            </form>

            <div className="col-lg-6 col-sm-12 contact-image ">
              <img
                className="col-7"
                src="https://i.postimg.cc/mD6ryWyY/IMG-9618.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
