import React, { useState, useEffect, useLayoutEffect } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import rectangle from "../../assets/instagram/rectangle.png";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux"; // Import useSelector

const ProductDetails = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [item, setItem] = useState(null); // State to store product data
  const brushes = useSelector((state) => state.brushes); // Get brushes from Redux state

  // Find the selected product based on ID
  useEffect(() => {
    if (id && brushes.length) {
      const selectedBrush = brushes.find((brush) => brush.id === parseInt(id));
      setItem(selectedBrush); // Set the selected brush in the state
    }
  }, [id, brushes]);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // If the item is not found, show a message
  if (!item) {
    return <p>Proizvod nije pronađen.</p>;
  }

  return (
    <div className="col-12 container-main">
      <div className="container prod col-12 row">
        <div className="col-md-6 col-12 prod-imageContainer row">
          <div className="col-md-2 col-12 prod-small">
            {[...Array(6)].map((_, index) => (
              <img
                key={index}
                className="col-md-7 col-1"
                src={rectangle}
                alt=""
              />
            ))}
          </div>
          <div className="col-md-7 prod-main-image">
            <img className="col-md-12 col-7" src={rectangle} alt="" />
          </div>
        </div>
        <div className="col-md-6 col-12 prod-content">
          <div className="prod-content-info">
            <p className="p1 c-gunmetal-gray">{item.shortDescription}</p>
            <p className="volkhov-regular h5">{item.name}</p>
            <p className="h7 volkhov-regular">{item.price} RSD</p>
          </div>
          <div className="prod-content-hurryUp p1 volkhov-regular">
            Hurry up! Sale ends in:
          </div>

          <p className="c-gunmetal-gray jost prod-content-description col-10">
            {item.description}
          </p>
          <p className="volkhov-regular">Colors:</p>
          {item.colors.map((color, index) => (
            <div className="d-flex row" key={index}>
              <button
                className="color"
                style={{ backgroundColor: color }}
              ></button>
            </div>
          ))}

          <div className="">
            <p className="volkhov-regular">Quantity</p>
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
