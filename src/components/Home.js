import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="center">
      <div className="container ">
        <div className="col-12 home">
          <div className="col-md-4 col-sm-3 home-bg homel"></div>
          <div className="col-md-4 col-sm-6 col-12 home-center">
            <div className="home-content   ">
              <div className="homes-bg homet"></div>
              <div className="home-content-center   ">
                <div className="jumbo">ULTIMATE</div>
                <div className="sale-jumbo fw-500">SALE</div>
                <div className="h6">NEW COLLECTION</div>
                <Link
                  to="/shop/page/:pageNum"
                  className="col-lg-8 col-md-12 col-sm-8 col-6 button-b d-flex justify-content-center text-decoration-none"
                >
                  SHOP NOW
                </Link>
              </div>
              <div className="home-bg homebo"></div>
            </div>
          </div>
          <div className="col-md-4 col-sm-3 home-bg homer"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
