import React from "react";

const Home = () => {
  return (
    <div className="home col-12">
      <div className="col-md-4 col-sm-3 home-bg homel"></div>
      <div className="col-md-4 col-sm-6 col-12 home-center">
        <div className="home-content">
          <div className="home-bg homet"></div>
          <div className="home-content-center">
            <div className="jumbo">ULTIMATE</div>
            <div className="sale-jumbo fw-500">SALE</div>
            <div className="h6">NEW COLLECTION</div>

            <button className="col-6 button-b">SHOP NOW</button>
          </div>
          <div className="home-bg homebo"></div>
        </div>
      </div>
      <div className="col-md-4 col-sm-3 home-bg homer"></div>
    </div>
  );
};

export default Home;
