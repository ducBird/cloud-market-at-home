/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./FeatureProduct.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { axiosClient } from "../../../../libraries/axioClient";
import { Link, useParams } from "react-router-dom";
import ButtonAddToCard from "../../../Shop/ShoppingCard/AddToCard";
function FeaturedProductSlider() {
  var settings = {
    dots: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 2,
  };
  const { categoryId } = useParams();
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    if (categoryId) {
      axiosClient.get("/products/").then((response) => {
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
    <div className="container">
      <Slider {...settings}>
        {products &&
          products.map((product) => {
            return (
              <div className="products-featured" key={product._id}>
                <div className="gallery-cell w-[90%]">
                  <div className="product-image relative">
                    <Link to={`/shop/${product.categoryId}/${product._id}`}>
                      <img
                        className="image-featured w-[100%] h-[100%]"
                        src={product.imageProduct}
                        alt=""
                      />
                      <div className="thumbnail-overlay">
                        <button>
                          <div className="info">Xem nhanh</div>
                        </button>
                      </div>
                      <div className="baner-holder absolute top-0 right-0">
                        <div className={!product.discount ? "" : "sale-banner"}>
                          {!product.discount ? "" : "Sale"}
                        </div>
                      </div>
                    </Link>
                  </div>
                  <a className="text-center" href="#">
                    <div className="product-details">
                      <span className="title text-primary text-[18px] font-bold">
                        {product.name}
                      </span>
                      <span className="price block">
                        <span
                          className={
                            product.discount ? "text-red-600 pr-3" : "hidden"
                          }
                        >
                          {product.total}
                        </span>
                        <span
                          className={
                            product.discount ? "price-old" : "list-none"
                          }
                        >
                          {product.price}
                        </span>
                      </span>
                    </div>
                  </a>
                  <>
                    <ButtonAddToCard
                      product={{ product: product, quantity: 1 }}
                    />
                  </>
                </div>
              </div>
            );
          })}
      </Slider>
    </div>
  );
}

export default FeaturedProductSlider;
