import React from "react";
import { useSelector } from "react-redux";
import Category from "../../model/category";
import { ProductProcess } from "../../model/enums";
import { RootStore } from "../../store";
import HomeScreenCategoryComponent from "./homeScreenCategoryComponent";

const HomeScreenCategories = () => {
  const { categories, loading, error, productProcess } = useSelector(
    (state: RootStore) => state.category
  );
  return (
    <section
      className="section-top-categories section-categories-carousel-v1 section-categories-carousel"
      id="categories-carousel-2"
    >
      <header className="section-header">
        <h2 className="section-title">
          Top
          <br />
          categories
          <br />
          this week
        </h2>
        <nav className="custom-slick-nav"></nav>
        {/* .custom-slick-nav */}
      </header>
      {/* .section-header */}
      <div
        className="col-12"
        // data-ride="tm-slick-carousel"
        // data-wrap=".products"
        // data-slick='{"infinite":false,"slidesToShow":7,"slidesToScroll":1,"dots":false,"arrows":true,"prevArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-left\"&gt;&lt;\/i&gt;&lt;\/a&gt;","nextArrow":"&lt;a href=\"#\"&gt;&lt;i className=\"tm tm-arrow-right\"&gt;&lt;\/i&gt;&lt;\/a&gt;","appendArrows":"#categories-carousel-2 .custom-slick-nav","responsive":[{"breakpoint":480,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":1200,"settings":{"slidesToShow":2,"slidesToScroll":2}},{"breakpoint":1700,"settings":{"slidesToShow":5,"slidesToScroll":5}}]}'
      >
        <div className="woocommerce columns-7">
          <div className="products">
            {/* home Screen Category Component */}
            {loading && productProcess === ProductProcess.FETCH_FLASH ? (
              <div>Loading</div>
            ) : error && productProcess === ProductProcess.FETCH_FLASH ? (
              <div>{error}</div>
            ) : (
              categories.map((e: Category) => (
                <HomeScreenCategoryComponent title={e.title} key={e._id} />
              ))
            )}
          </div>
          {/* .woocommerce */}
        </div>
      </div>
    </section>
  );
};

export default HomeScreenCategories;
