import React from "react";

const homeCategoryList = () => {
  return (
    <div className="banners-block column-2 px-5">
      <div className="banner text-in-left">
        <a href="shop.html">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: "url( assets/images/banner/12-1.jpg )",
              height: "210px",
            }}
            className="banner-bg"
          >
            <div className="caption">
              <div className="banner-info">
                <h3 className="title">
                  <strong>Top 100 Deals</strong>
                  <br /> for Womens
                  <br /> Fashion
                </h3>
              </div>
              <span className="price">
                <span className="start_price">Starting at</span>
                <br />
                $69.99
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className="banner text-in-left">
        <a href="shop.html">
          <div
            style={{
              backgroundSize: "cover",
              backgroundPosition: "center center",
              backgroundImage: "url( assets/images/banner/12-2.jpg )",
              height: "210px",
            }}
            className="banner-bg"
          >
            <div className="caption">
              <div className="banner-info">
                <h3 className="title">
                  Billboard
                  <br /> Music Albums
                  <br />
                  <strong>Carnival</strong> time{" "}
                </h3>
                <h4 className="subtitle">Buy 3 Get 10% off</h4>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default homeCategoryList;
