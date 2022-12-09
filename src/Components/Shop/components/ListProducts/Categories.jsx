/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ShopSideBar from "../SideBar/ShopSideBar";
import { Link, useParams } from "react-router-dom";
import Products from "../Products/Products";
import { axiosClient } from "../../../../libraries/axioClient";

function Categories() {
  const { categoryId } = useParams();
  const [category, setCategory] = React.useState({});

  React.useEffect(() => {
    if (categoryId) {
      axiosClient.get("/categories/" + categoryId).then((response) => {
        setCategory(response.data);
      });
    }
  }, [categoryId]);
  return (
    <div className="shop-hot-deal">
      <div className="container">
        <div className=" text-primary text-xs breadcrumb-collection">
          <span>
            <a href="/">Trang chủ</a>
          </span>
          <span className="mx-2">/</span>
          <span>
            <Link to={`/shop/${categoryId ? categoryId : "hotdeal"}`}>
              {categoryId ? category.name : "Hot deal"}
            </Link>
          </span>
          <span className="mx-2">/</span>
          <span className="text-black">Trang 1 của 1</span>
          <p className="border-b border-primary my-5"></p>
        </div>
        <div className="flex">
          <>
            <ShopSideBar />
          </>
          <>
            <Products />
          </>
        </div>
      </div>
    </div>
  );
}

export default Categories;
