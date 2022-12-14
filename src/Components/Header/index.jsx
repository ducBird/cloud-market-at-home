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
import { useUser } from "../../hooks/useUser";
import { API_URL } from "../../constants/URLS";

function Header() {
  const { items } = useCarts((state) => state);
  const { users } = useUser((state) => state);
  const quantityCart = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  const LoginButton = (
    <div className="flex items-center transition-all hover:text-primary">
      <AiOutlineUser size={"24px"} width="30%" />
      <button className="ml-2 font-bold w-[100%]">Đăng nhập</button>
    </div>
  );

  const LogoutButton = (
    <div className="c-user flex items-center gap-1 text-primary nav-user p-2">
      {/* <AiOutlineUser /> */}
      <div className="w-[20px] h-[20px]">
        <img
          src={`${API_URL}${users.avatar}`}
          alt="avatar"
          className="w-[100%] h-[100%] rounded-full"
        />
      </div>
      <span>{users.fullName}</span>
      <ul className="sub-c-user">
        <li>{`Tài khoản của ${users.lastName}`}</li>
        <li>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "accounts/login";
            }}
          >
            Đăng xuất
          </button>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center px-3 pt-2 justify-between bg-white containerHeader">
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
        <div className="flex items-center gap-5">
          {/* Button Login-Logout */}
          <Link to={"/accounts/login"}>
            {window.localStorage.getItem("token") ? LogoutButton : LoginButton}
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
