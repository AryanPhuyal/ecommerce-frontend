import React from "react";

const ProductComponent = () => {
  return (
    <div className="product" style={{ width: "236px" }}>
      <div className="yith-wcwl-add-to-wishlist">
        <a href="wishlist.html" rel="nofollow" className="add_to_wishlist">
          {" "}
          Add to Wishlist
        </a>
      </div>
      <a
        href="single-product-fullwidth.html"
        className="woocommerce-LoopProduct-link"
      >
        <span className="onsale">
          <span className="woocommerce-Price-amount amount">
            <span className="woocommerce-Price-currencySymbol">$</span>150.04
          </span>
        </span>
        <img
          src="assets/images/products/7.jpg"
          width="224"
          height="197"
          className="wp-post-image"
          alt=""
        />
        <span className="price">
          <ins>
            <span className="amount"> 789.95</span>
          </ins>
          <del>
            <span className="amount">999.00</span>
          </del>
          <span className="amount"> </span>
        </span>
        {/* .price */}
        <h2 className="woocommerce-loop-product__title">
          Bluetooth on-ear PureBass Headphones
        </h2>
      </a>
      <div className="hover-area">
        <a
          className="button add_to_cart_button"
          href="cart.html"
          rel="nofollow"
        >
          Add to cart
        </a>
        <a className="add-to-compare-link" href="compare.html">
          Add to compare
        </a>
      </div>
    </div>
  );
};

export default ProductComponent;
