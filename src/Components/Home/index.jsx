import React from "react";
import FeaturedProducts from "./IntroductionHomePage/FeaturedProductsHomePage/FeaturedProducts";
import Slider from "./IntroductionHomePage/Slider/Slider";
import Works from "./IntroductionHomePage/works/Works";
import Product from "./Product/Product";
import Testumonials from "./Testimonials/Testimonials";
import AsSeemOn from "./AsSeenOn/asseemon";
function IntroductionHomePage() {
  return (
    <div className="introduction-home-page">
      <Slider />
      <Works />
      <FeaturedProducts />
      <Product />
      <Testumonials />
      <AsSeemOn />
    </div>
  );
}
export default IntroductionHomePage;
