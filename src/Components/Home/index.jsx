import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import IntroductionHomePage from "../Home/IntroductionHomePage";
function HomePage() {
  return (
    <div className="home">
      <section className="container">
        <IntroductionHomePage />
      </section>
    </div>
  );
}

export default HomePage;
