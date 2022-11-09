import React from "react";
import FeaturedProducts from "./IntroductionHomePage/FeaturedProductsHomePage/FeaturedProducts";
import Slider from "./IntroductionHomePage/Slider/Slider";
import Works from "./IntroductionHomePage/works/Works";

function IntroductionHomePage() {
  return (
    <div className="introduction-home-page">
      <Slider />
      <Works />
      <FeaturedProducts />
    </div>
  );
}

export default IntroductionHomePage;
