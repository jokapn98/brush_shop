import React, { useState, useEffect, useLayoutEffect } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { HiOutlineShare } from "react-icons/hi";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // za menjanje slika

  const brushes = useSelector((state) => state.brushes);

  // pronalazak proizvoda
  useEffect(() => {
    if (id && brushes.length) {
      const selectedBrush = brushes.find((brush) => brush.id === parseInt(id));
      setItem(selectedBrush);
    }
  }, [id, brushes]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    return <p>Proizvod nije pronađen.</p>;
  }

  // funkcije za menjanje slike
  const nextImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === item.brushImg.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    e.preventDefault();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? item.brushImg.length - 1 : prevIndex - 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="col-12 container-main">
      <div className="container prod col-12 row">
        {/* LEVA STRANA - slike */}
        <div className="col-md-6 col-12 prod-imageContainer row">
          {/* Male slike sa leve strane */}
          <div className="col-md-2 col-12 prod-small">
            {item.brushImg.map((imgUrl, index) => (
              <img
                key={index}
                className={`col-md-7 col-1 small-image ${
                  index === currentImageIndex ? "active" : ""
                }`}
                src={imgUrl}
                alt={`${item.name} ${index}`}
                style={{
                  cursor: "pointer",
                  border:
                    index === currentImageIndex
                      ? "2px solid #333"
                      : "1px solid #ccc",
                  borderRadius: "6px",
                  marginBottom: "8px"
                }}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>

          {/* Glavna slika sa strelicama */}
          <div
            className="col-md-7 prod-main-image"
            style={{ position: "relative" }}
          >
            <img
              className="col-md-12 col-7 main-image"
              src={item.brushImg[currentImageIndex]}
              alt={item.name}
              style={{
                borderRadius: "10px",
                transition: "all 0.3s ease-in-out"
              }}
            />

            {/* Strelice - samo ako ima više slika */}
            {item.brushImg.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="prev-arrow"
                  style={{
                    position: "absolute",
                    left: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "none",
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                    fontSize: "16px",
                    cursor: "pointer"
                  }}
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  className="next-arrow"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    background: "rgba(255, 255, 255, 0.8)",
                    border: "none",
                    borderRadius: "50%",
                    width: "28px",
                    height: "28px",
                    fontSize: "16px",
                    cursor: "pointer"
                  }}
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>

        {/* DESNA STRANA - opis proizvoda */}
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
          <div className="d-flex flex-wrap">
            {item.colors.map((color, index) => (
              <button
                key={index}
                className="color"
                style={{
                  backgroundColor: color,
                  border: "1px solid #ccc",
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  marginRight: "5px"
                }}
              ></button>
            ))}
          </div>

          {/* Količina i Add to cart */}
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

            {/* FAQ i share */}
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

            {/* Delivery info */}
            <div className="">
              <p className="volkhov-regular prod-content-faq-icon">
                <CiDeliveryTruck className="prod-content-faq-icon-image" />
                <span className="fw-700">Estimated Delivery:&nbsp;</span>Jul 30
                - Aug 03
              </p>
              <p className="volkhov-regular prod-content-faq-icon">
                <IoBagHandleOutline className="prod-content-faq-icon-image" />
                <span className="fw-700">Free Shipping & Returns:&nbsp;</span>On
                all orders over 6000 RSD
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
