import React, { useEffect } from "react";

import IntroductionHomePage from "../Home/IntroductionHomePage";
import Product from "./Product/Product";
import Testumonials from "./Testimonials/Testimonials";
import AsSeemOn from "./AsSeenOn/asseemon";
import { useUser } from "../../hooks/useUser";
import Cookies from "js-cookie";
function HomePage() {
  const { addUser } = useUser((state) => state);
  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:9000/customers/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "https://localhost:3000",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("authentication failed!");
        })
        .then((resObject) => {
          // console.log(resObject.user);
          // console.log(resObject.cookie.session_google_account);
          window.localStorage.setItem(
            "cookie-google",
            resObject.cookie.session_google_account
          );
          addUser(resObject.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
    // const getCookies = window.Cookies.get({ abc: "def" });
    // console.log("getCookies ", getCookies);
  }, []);
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
