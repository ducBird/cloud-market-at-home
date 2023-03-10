/* eslint-disable array-callback-return */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { BsFillCaretDownFill, BsFillCaretRightFill } from "react-icons/bs";
import "./navbar.css";
import { axiosClient } from "../../../libraries/axiosClient";
function Navbar() {
  const { categoryId } = useParams();
  const [categories, setCategories] = React.useState([]);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  React.useEffect(() => {
    axiosClient.get("/categories").then((response) => {
      setCategories(response.data);
    });
  }, []);
  return (
    <>
      <nav className=" text-white rounded bg-primary">
        <div className="container">
          <div className="mx-auto w-[300px] sm:w-[550px] md:w-[650px] lg:w-[1024px] xl:w-[1300px] 2xl:w-[1400px]">
            <ul className="hidden lg:flex lg:justify-between lg:w-[90%] xl:w-[80%] lg:mx-auto lg:font-bold">
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
                <ul className="sub-nav-shop lg:top-[100%] lg:left-[0]">
                  <li key="hotdeal">
                    <Link to={"/shop/hotdeal"}>
                      <p>Khuyến mãi</p>
                    </Link>
                  </li>
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
              </li>
              <li className="relative li-nav li-nav-shop">
                <Link to={"/community"}>
                  {/* Community */}
                  Cộng Đồng
                </Link>
                <BsFillCaretDownFill />
                <ul className="sub-nav-shop lg:top-[100%] lg:left-[0]">
                  <li>
                    <Link to={"/community/recipes"}>Recipes</Link>
                  </li>
                  <li>
                    <Link to={"/community/vegetarian"}>
                      Vegetarian Community
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="li-nav">
                <Link to={"/contactUs"}>
                  {/* Contact Us */}
                  Liên Hệ
                </Link>
              </li>
              <li className="li-nav">
                <Link to={"/history-orders"}>
                  {/* Check order */}
                  Lịch sử đơn hàng
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="my-auto lg:hidden text-left"
            onClick={() => {
              console.log("ok");
              setMobileMenu(!mobileMenu);
            }}
          >
            <div className="">
              <span className="inline">Menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
            {mobileMenu && (
              <nav>
                <div className="nav">
                  <ul className="text-left w-[180px]">
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
                      <BsFillCaretRightFill />
                      <ul className="sub-nav-shop md:top-[0%] md:left-[180px]">
                        <li key="hotdeal">
                          <Link to={"/shop/hotdeal"}>
                            <p>Khuyến mãi</p>
                          </Link>
                        </li>
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
                    </li>
                    <li className="relative li-nav li-nav-shop">
                      <Link to={"/community"}>
                        {/* Community */}
                        Cộng Đồng
                      </Link>
                      <BsFillCaretRightFill />
                      <ul className="sub-nav-shop md:top-[0%] md:left-[180px]">
                        <li>
                          <Link to={"/community/recipes"}>Recipes</Link>
                        </li>
                        <li>
                          <Link to={"/community/vegetarian"}>
                            Vegetarian Community
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="li-nav">
                      <Link to={"/contactUs"}>
                        {/* Contact Us */}
                        Liên Hệ
                      </Link>
                    </li>
                    <li className="li-nav">
                      <Link to={"/history-orders"}>
                        {/* Check order */}
                        Lịch sử đơn hàng
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
