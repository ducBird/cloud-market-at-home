/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ShopSideBar from "../SideBar/ShopSideBar";
import { useLocation } from "react-router-dom";
import Products from "../Products/Products";
import dataProducts from "../../../../data/products";
import dataCategories from "../../../../data/categories";
function Categories() {
  const location = useLocation();
  let arrPathName = location.pathname.split("/");
  const categoryId = parseInt(arrPathName[arrPathName.length - 1]);

  const data = dataProducts.filter((product) => {
    return product.categoryId === categoryId;
  });
  const dataCategory = dataCategories.find((category) => {
    return category.categoryId === categoryId;
  });

  return (
    <div className="shop-hot-deal">
      <div className="container">
        <div className=" text-primary text-xs breadcrumb-collection">
          <span>
            <a href="/">TRANG CHỦ</a>
          </span>
          <span className="mx-2">/</span>
          <span>
            <a href={`/shop/${categoryId}`}>{dataCategory.name}</a>
          </span>
          <span className="mx-2">/</span>
          <span className="text-black">TRANG 1 CỦA 1</span>
          <p className="border-b border-primary my-5"></p>
        </div>
        <div className="flex">
          <>
            <ShopSideBar />
          </>
          <>
            <Products dataProducts={data} />
          </>
        </div>
      </div>
    </div>
  );
}

export default Categories;
