/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./navbar.css";
import dataShopPage from "../../Shop/ShopPage/ShopPage";
function Navbar() {
  return (
    <>
      <nav className="text-white rounded bg-primary">
        <ul className="flex justify-between w-[70%] mx-auto font-bold">
          <li className="li-nav">
            <Link to={"/"}>
              {/* Home */}
              Trang Chủ
            </Link>
          </li>
          <li className="relative li-nav li-nav-shop">
            <Link to={"/shop"}>
              {/* Shop */}
              Sản Phẩm
            </Link>
            <BsFillCaretDownFill />
            <ul className="sub-nav-shop">
              {dataShopPage.map((category, index) => {
                return (
                  <li key={index}>
                    <Link to={`/shop/${category.id}`}>
                      <p>{category.title}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>
          <li className="li-nav">
            <Link to={"/aboutUs"}>
              {/* About Us */}
              Về Chúng Tôi
            </Link>
            <BsFillCaretDownFill />
          </li>
          <li className="li-nav">
            <Link to={"/community"}>
              {/* Community */}
              Cộng Đồng
            </Link>
            <BsFillCaretDownFill />
          </li>
          <li className="li-nav">
            <Link to={"/contactUs"}>
              {/* Contact Us */}
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
