import React from "react";

import IntroductionHomePage from "../Home/IntroductionHomePage";
import Product from "./Product/Product";
import Testumonials from "./Testimonials/Testimonials";
import AsSeemOn from "./AsSeenOn/asseemon";
function HomePage() {
  return (
    <div className="home mt-[-105px]">
      <section className="container">
        <IntroductionHomePage />
        <Product />
        <Testumonials />
        <AsSeemOn />
      </section>
    </div>
  );
}

export default HomePage;
