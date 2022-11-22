import React from "react";
import { useParams, useLocation } from "react-router-dom";
import dataProducts from "../../../../data/products";
function ProductDetail() {
  // let id = useParams().id;
  const location = useLocation();
  let arrPathName = location.pathname.split("/");
  const categoryId = parseInt(arrPathName[arrPathName.length - 2]);
  const id = parseInt(arrPathName[arrPathName.length - 1]);
  const productDetail = dataProducts.find((product) => {
    return product.id === id && product.categoryId === categoryId;
  });
  console.log("id: ", id);
  console.log("category: ", categoryId);
  // console.log(productDetail);
  return (
    <div className="product-detail">
      <div className="container">
        <div>
          <img src={productDetail.imageProduct} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
