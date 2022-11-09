/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import dataFeatureProduct from "./FeatureProductData";
import "./FeatureProduct.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function FeaturedProductSlider() {
  var settings = {
    dots: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div className="container">
      <Slider {...settings}>
        {dataFeatureProduct.map((value, index) => {
          return (
            <div className="gallery-cell" key={index}>
              <div className="product-image relative">
                <a href="#">
                  <img
                    className="image-featured w-[100%] h-[100%]"
                    src={value.imageFeatureProduct}
                    alt=""
                  />
                  <div className="thumbnail-overlay">
                    <div className="info">Xem nhanh</div>
                  </div>
                  <div className="baner-holder absolute top-0 right-0">
                    <div className="sale-banner">Sale</div>
                  </div>
                </a>
              </div>
              <a className="text-center" href="#">
                <div className="product-details">
                  <span className="title text-primary text-[18px] font-bold">
                    {value.title}
                  </span>
                  <span className="price block">
                    <span className="price-sale mr-1 text-red-600">
                      {value.price_sale}
                    </span>
                    <span className="price old line-through">
                      {value.price_old}
                    </span>
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default FeaturedProductSlider;
