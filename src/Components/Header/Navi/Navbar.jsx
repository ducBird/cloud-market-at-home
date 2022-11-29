/* eslint-disable array-callback-return */
import React from "react";
import { Link } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import "./navbar.css";
import { axiosClient } from "../../../libraries/axioClient";
function Navbar() {
  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    axiosClient.get("/categories").then((response) => {
      setCategories(response.data);
    });
    // axiosClient.get("/categories/" + categoryId).then((response) => {
    //   setCategory(response.data);
    // });
  }, []);
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
              {categories.map((category, index) => {
                return (
                  <li key={index}>
                    <Link to={`/shop/${category._id}`}>
                      <p>{category.name}</p>
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
          <li className="li-nav">
            <Link to={"/test"}>
              {/* databatest */}
              Test
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
