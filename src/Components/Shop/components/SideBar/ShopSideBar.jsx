/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ShopSideBar.css";
import { Link } from "react-router-dom";
import { axiosClient } from "../../../../libraries/axioClient";
function ShopSideBar() {
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
    <div className="side-bar mr-[20px]">
      <div className="side-bar-block pr-[40px] border-r border-primary">
        <h4 className="toggle text-primary text-[20px] font-bold">
          Sản phẩm của chúng tôi
        </h4>
        <ul className="toggle_list">
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
      </div>
    </div>
  );
}

export default ShopSideBar;
