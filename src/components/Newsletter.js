import React, { useState } from "react";
import blender from "../assets/newsletter/blender.png";
import onebrush from "../assets/newsletter/onebrush.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="news">
      <div className="container news-main col-12 ">
        <div className="col-2 news-main-pictures ">
          <img className="col-lg-12 col-12 " src={onebrush} alt="" />
        </div>

        <div className="col-lg-8 col-md-12 news-main-content">
          <h1 className="h1 c-gray">Subscribe To Our Newsletter</h1>
          <p className="c-gunmetal-gray">
            Subscribe to our newsletter and get the latest updates on makeup
            brush collections, special offers, and expert beauty tips. Be the
            first to discover new arrivals and exclusive deals tailored just for
            you!
          </p>

          {!submitted ? (
            <form
              action="https://formspree.io/f/mrbjnajj"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ padding: "10px", fontSize: "16px" }}
              />
              <button
                type="submit"
                className="button-b"
                style={{
                  padding: "10px",
                  fontSize: "16px",
                  width: "fit-content"
                }}
              >
                Subscribe Now
              </button>
            </form>
          ) : (
            <p className="c-gunmetal-gray p1">Thank you for subscribing!</p>
          )}
        </div>

        <div className="col-2 news-main-pictures ">
          <img className="col-lg-12 col-12 " src={blender} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
