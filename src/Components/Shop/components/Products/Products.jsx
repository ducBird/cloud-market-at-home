/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { axiosClient } from "../../../../libraries/axioClient";
function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = React.useState([]);

  // get dữ liệu products
  React.useEffect(() => {
    axiosClient.get("/products/" + categoryId).then((response) => {
      setProducts(response.data);
    });
  }, [categoryId]);
  return (
    <div className="container flex-1 mt-[-15px]">
      <div className="grid grid-cols-4">
        {products.map((product, index) => {
          return (
            <div className="product mb-9 mx-4 border" key={index}>
              <div className="product-image relative">
                <Link to={`/shop/${product.categoryId}/${product._id}`}>
                  <img src={product.urlImage} alt="" />
                  <div className="thumbnail-overlay">
                    <span>
                      <div className="info">Xem nhanh</div>
                    </span>
                  </div>
                  <div className="baner-holder absolute top-0 right-0">
                    <div className={!product.discount ? "" : "sale-banner"}>
                      {!product.discount ? "" : "Sale"}
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
                    {/* giá khuyến mãi */}
                    <span
                      className={
                        product.discount ? "text-red-600 pr-3" : "hidden"
                      }
                    >
                      {product.total}
                    </span>
                    {/* giá gốc */}
                    <span
                      className={product.discount ? "price-old" : "list-none"}
                    >
                      {product.price}
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
