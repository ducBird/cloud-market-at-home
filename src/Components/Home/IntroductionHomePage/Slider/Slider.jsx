/* eslint-disable array-callback-return */
import React from "react";
import dataSlides from "./SliderData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
function Sliders() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slideshow-section">
      <div className="container">
        <Slider {...settings}>
          {dataSlides.map((value, index) => {
            return (
              <div className="silder" key={index}>
                <img
                  className="w-[100%] h-[400px] md:h-[500px] lg:h-[700px]  mx-auto"
                  src={value.imgSlider}
                  alt=""
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default Sliders;
