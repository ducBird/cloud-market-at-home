/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import dataShopPage from "./ShopPage";
function ShopPage() {
  return (
    <div className="shop-page">
      <div className="container">
        <div className=" text-primary text-xs breadcrumb-collection">
          <span>
            <a href="/">TRANG CHU</a>
          </span>
          <span className="mx-2">/</span>
          <span>
            <a href="/shop">SẢN PHẨM</a>
          </span>
          <span className="mx-2">/</span>
          <span className="text-black">TRANG 1 CỦA 2</span>
          <p className="border-b border-primary my-5"></p>
        </div>
        <div className="list-collection-wrapper">
          <div className="grid grid-cols-3">
            {dataShopPage.map((value, index) => {
              return (
                <div className="one-third mx-2 my-3" key={index}>
                  <Link to={value.link}>
                    <div className="one-third-image">
                      <img src={value.imageShopPage} alt="" />
                    </div>
                    <div className="one-third-title">
                      <p className="text-primary text-center font-bold mt-3">
                        {value.title}
                      </p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
