import React from "react";

const homeSlider = () => {
  return (
    <div className="slider-block column-1 px-5">
      <div className="home-v12-slider">
        <div className="home-v12-slider home-slider">
          <div
            className="slider-1"
            style={{
              backgroundImage:
                "url(assets/images/slider/home-v12-background.jpg)",
            }}
          >
            <div className="caption">
              <div className="pre-title">warehouse</div>
              <div className="title">clear-out</div>
              <div className="sub-title">of fitness home equipment</div>
              <div className="offer-price">up to 70% sale!</div>
              <div className="button">
                Get Yours now
                <i className="tm tm-long-arrow-right"></i>
              </div>
              <div className="bottom-caption">Free shipping on US Terority</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homeSlider;
