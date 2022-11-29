/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ShopSideBar from "../SideBar/ShopSideBar";
import { useParams } from "react-router-dom";
import Products from "../Products/Products";
import { axiosClient } from "../../../../libraries/axioClient";

function Categories() {
  const { categoryId } = useParams();
  const [category, setCategory] = React.useState([]);
  React.useEffect(() => {
    axiosClient.get("/categories/" + categoryId).then((response) => {
      setCategory(response.data);
    });
  }, [categoryId]);

  return (
    <div className="shop-hot-deal">
      <div className="container">
        <div className=" text-primary text-xs breadcrumb-collection">
          <span>
            <a href="/">TRANG CHỦ</a>
          </span>
          <span className="mx-2">/</span>
          <span>
            <a href={`/shop/${categoryId}`}>{category.name}</a>
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
            <Products />
          </>
        </div>
      </div>
    </div>
  );
}

export default Categories;
