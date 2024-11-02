import React from "react";

const Footer = () => {
  return (
    <div className="col-12 footer">
      <div className="container footer-content col-12 row">
        <div className="   h6 c-gray volkhov-regular col-lg-2 col-11 footer-logo ">
          Brushes
        </div>
        <div className="col-lg-4 col-12"></div>
        <div className="col-lg-6 col-12 footer-menu ">
          <p className="c-gray footer-menu-item col-">Support</p>
          <p className="c-gray footer-menu-item">Invoicing</p>
          <p className="c-gray footer-menu-item">Contract</p>
          <p className="c-gray footer-menu-item">Careers</p>
        </div>
      </div>
      <div>
        <p className="p5 c-gray ">
          Copyright © 2022 Xpro . All Rights Reseved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
