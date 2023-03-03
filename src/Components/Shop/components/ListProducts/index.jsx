/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import ShopSideBar from "../SideBar/ShopSideBar";
import { Link, useParams } from "react-router-dom";
import Products from "../Products/Products";
import { axiosClient } from "../../../../libraries/axiosClient";

function Categories() {
  const { categoryId } = useParams();
  const [category, setCategory] = React.useState({});
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    if (categoryId) {
      axiosClient.get("/categories/" + categoryId).then((response) => {
        setCategory(response.data);
      });
    }
  }, [categoryId]);

  // get dữ liệu products
  React.useEffect(() => {
    if (categoryId) {
      axiosClient.get("/products/" + categoryId).then((response) => {
        setProducts(response.data);
      });
    } else {
      axiosClient.get("/products").then((response) => {
        let listHotDeal = response.data.filter((product) => {
          return product.discount;
        });

        setProducts(listHotDeal);
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
          <div className="mt-[20px] font-bold text-2xl">
            <h1>{category.name}</h1>
          </div>
          <p className="border-b border-primary my-5"></p>
        </div>

        <div className="flex">
          <>
            <ShopSideBar />
          </>
          <>
            <Products products={products} />
          </>
        </div>
      </div>
    </div>
  );
}

export default Categories;
