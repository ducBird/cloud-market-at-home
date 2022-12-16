import React from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";
import { useCarts } from "../../hooks/useCart";
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
import CloudMarketLogo from "../../assets/header/logo/cloud-market.jpg";
import Navbar from "./Navi/Navbar";

function Header() {
  const { items } = useCarts((state) => state);
  const quantityCart = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const LoginButton = (
    <button className="ml-2 font-bold w-[100%]">Đăng nhập</button>
  );

  const LogoutButton = (
    <button
      className="ml-2 font-bold w-[100%]"
      onClick={() => {
        localStorage.clear();
        window.location.href = "accounts/login";
      }}
    >
      Đăng xuất
    </button>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between gap-3 px-3 pt-2 bg-white containerHeader">
        <div className="flex items-center flex-1 gap-5">
          {/* Logo */}
          <a href="http://localhost:3000/">
            <img
              src={CloudMarketLogo}
              alt="logo Cloud Market At Home"
              style={{ display: "inline-block", width: "60px" }}
            />
            <span className="font-bold title-logo">Cloud Market AH</span>
          </a>

          {/* Input Search */}
          <div className="ml-20 search-content">
            <button className="ml-2 search-icon">
              <AiOutlineSearch size={"28px"} className="opacity-80" />
            </button>
            <input
              type="text"
              className="rounded-tr-md rounded-bl-md rounded-br-3xl rounded-tl-3xl input-search"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="flex items-center gap-10 w-[300px]">
          {/* Button Login */}
          <Link to={"/accounts/login"}>
            <div className="flex items-center transition-all hover:text-primary">
              <AiOutlineUser size={"24px"} width="30%" />
              {window.localStorage.getItem("token")
                ? LogoutButton
                : LoginButton}
            </div>
          </Link>

          {/* Button Shopping Cart */}
          <Link to="/shop/card">
            <div className="mini-cart rounded-tr-md rounded-bl-md rounded-br-3xl rounded-tl-3xl">
              <span className="mr-2">{quantityCart}</span>
              <AiOutlineShoppingCart size={"20px"} />
            </div>
          </Link>
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
