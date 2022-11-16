/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

function Products({ dataProducts }) {
  return (
    <div className="container flex-1 mt-[-15px]">
      <div className="grid grid-cols-4">
        {dataProducts.map((product, index) => {
          return (
            <div className="product mb-9 mx-4 border" key={index}>
              <div className="product-image relative">
                <Link to={`/shop/${product.categoryId}/${product.id}`}>
                  <img src={product.imageProduct} alt="" />
                  <div className="thumbnail-overlay">
                    <span>
                      <div className="info">Xem nhanh</div>
                    </span>
                  </div>
                  <div className="baner-holder absolute top-0 right-0">
                    <div
                      className={
                        product.price_sale === null ? "" : "sale-banner"
                      }
                    >
                      {product.price_sale === null ? "" : "Sale"}
                    </div>
                  </div>
                </Link>
              </div>
              <a className="text-center" href="#">
                <div className="content-price">
                  <span className="title text-primary text-[18px] font-bold">
                    {product.title}
                  </span>
                  <span className="price block">
                    <span className="price-sale mr-1 text-red-600">
                      {product.price_sale}
                    </span>
                    <span
                      className={
                        product.price_sale === null ? "list-none" : "price-old"
                      }
                    >
                      {product.price_old}
                    </span>
                  </span>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
