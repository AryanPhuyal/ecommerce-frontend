import React from "react";
import ProductComponent from "./productSliderComponent";

const productSlider = () => {
  return (
    <section className="section-products-carousel" id="homev12-carousel-1">
      <header className="section-header">
        <h2 className="section-title">Hot New Arrivals You might Like</h2>
        <nav className="custom-slick-nav"></nav>
        {/* .custom-slick-nav */}
      </header>
      {/* .section-header */}
      <div
        className="products-carousel"
        id="new-arrival-carousel"
        data-ride="tm-slick-carousel"
        data-wrap=".products"
        data-slick='{"infinite":false,"slidesToShow":8,"slidesToScroll":8,"dots":true,"arrows":true,"prevArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-left\"&gt;&lt;\/i&gt;&lt;\/a&gt;","nextArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-right\"&gt;&lt;\/i&gt;&lt;\/a&gt;","appendArrows":"#homev12-carousel-1 .custom-slick-nav","responsive":[{"breakpoint":650,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":780,"settings":{"slidesToShow":3,"slidesToScroll":3}},{"breakpoint":1200,"settings":{"slidesToShow":4,"slidesToScroll":4}},{"breakpoint":1400,"settings":{"slidesToShow":6,"slidesToScroll":6}}]}'
      >
        <div className="container-fluid">
          <div className="woocommerce columns-8">
            <div className="products">
              {/* product outer */}
              <ProductComponent />

              {/* /.product-outer */}
            </div>
          </div>
        </div>
        {/* .container-fluid */}
      </div>
      {/* .products-carousel */}
    </section>
  );
};

export default productSlider;
