/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link, useParams } from "react-router-dom";
import { axiosClient } from "../../../../libraries/axioClient";
import ButtonAddToCard from "../../ShoppingCard/AddToCard";
function Products() {
  const { categoryId } = useParams();
  const [products, setProducts] = React.useState([]);
  const [cart, setCart] = React.useState([]);
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
  function addToCart(id) {
    const data = products.find((product) => {
      return product.id === id;
    });
    console.log(data);

    cart.push(data);
    console.log(cart);
  }
  return (
    <div className="container flex-1 mt-[-15px]">
      <div className="grid grid-cols-4">
        {products &&
          products.map((product, index) => {
            return (
              <div className="product mb-9 mx-4 border" key={index}>
                <div className="product-image relative">
                  <Link to={`/shop/${product.categoryId}/${product._id}`}>
                    <img src={product.imageProduct} alt="" />
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
                <Link
                  className="text-center"
                  to={`/shop/${product.categoryId}/${product._id}`}
                >
                  <div className="content-price">
                    <span className="title text-primary text-[18px] font-bold">
                      {product.name}
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
                </Link>
                <div className="w-[100%]">
                  <ButtonAddToCard
                    addToCart={() => {
                      addToCart(product.id);
                    }}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
