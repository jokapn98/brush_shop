import React from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";

import rectangle from "../../assets/instagram/rectangle.png";

const ProductDetails = () => {
  return (
    <div className="col-12 container-main">
      <div className="container prod  col-12 row">
        <div className="col-md-6 col-12 prod-imageContainer row">
          <div className="col-md-2 col-12 prod-small">
            <img className="col-md-7 col-1" src={rectangle} alt="" />
            <img className="col-md-7 col-1" src={rectangle} alt="" />
            <img className="col-md-7 col-1" src={rectangle} alt="" />
            <img className="col-md-7 col-1" src={rectangle} alt="" />
            <img className="col-md-7 col-1" src={rectangle} alt="" />
            <img className="col-md-7 col-1" src={rectangle} alt="" />
          </div>
          <div className="col-md-7 prod-main-image">
            <img className="col-md-12 col-7" src={rectangle} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12  prod-content">
          <div className="prod-content-info">
            <p className="p1 c-gunmetal-gray ">BRAND</p>
            <p className="volkhov-regular h5">RANCAI eye set</p>
            <p className="h7 volkhov-regular">1300</p>
          </div>
          <div className="prod-content-hurryUp p1 volkhov-regular">
            Hurry up! Sale ends in:
          </div>

          <p className="c-gunmetal-gray jost prod-content-description col-10">
            This luxurious set includes 7 brushes made from natural hair and
            wood, offering precise blending and shading for flawless eye looks.
          </p>
          <p className="volkhov-regular ">Colors:</p>
          <div className="colors">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
          </div>
          <div className="">
            <p className="volkhov-regular"> Quantity</p>
            <div className="prod-content-quantity">
              <div className="col-2 prod-content-quantity-counter ">
                <div className="col-4">-</div>
                <div className="col-4">1</div>
                <div className="col-4">+</div>
              </div>
              <div className="col-9">
                <button className="col-12 prod-content-addtocart volkhov-regular">
                  Add to cart
                </button>
              </div>
            </div>
            <div className="prod-content-faq">
              <div className="col-2 jost prod-content-faq-icon">
                <FaRegCircleQuestion className="prod-content-faq-icon-image" />
                FAQ
              </div>
              <div className="col-2 jost prod-content-faq-icon">
                <HiOutlineShare className="prod-content-faq-icon-image" />
                Share
              </div>
            </div>
            <div className="">
              <p className="volkhov-regular prod-content-faq-icon">
                <CiDeliveryTruck className="prod-content-faq-icon-image" />
                <span className="fw-700">Estimated Delivery: &nbsp;</span> Jul
                30 - Aug 03
              </p>
              <p className="volkhov-regular prod-content-faq-icon">
                <IoBagHandleOutline className="prod-content-faq-icon-image" />
                <span className="fw-700">
                  {" "}
                  Free Shipping & Returns: &nbsp;
                </span>{" "}
                On all orders over 6000rsd
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
