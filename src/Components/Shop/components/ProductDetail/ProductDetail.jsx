import React from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../../../libraries/axioClient";
import BreadcrumbProductDetail from "./BreadcrumbProductDetail";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

import ButtonAddToCard from "../../ShoppingCard/AddToCard";
function ProductDetail() {
  const { categoryId } = useParams();
  const { id } = useParams();
  const [products, setProduct] = React.useState([]);
  const [category, setCategory] = React.useState({});
  // get dữ liệu products
  React.useEffect(() => {
    axiosClient.get("/products/" + categoryId + "/" + id).then((response) => {
      setProduct(response.data);
    });
  }, [categoryId, id]);

  React.useEffect(() => {
    if (categoryId) {
      axiosClient.get("/categories/" + categoryId).then((response) => {
        setCategory(response.data);
      });
    }
  }, [categoryId]);

  return (
    <div className="product-detail">
      <div className="container">
        <div className="w-[100%]">
          <BreadcrumbProductDetail />
        </div>
        <div className="baner-holder w-[50px]">
          <div className={!products.discount ? "" : "sale-banner"}>
            {!products.discount ? "" : "Sale"}
          </div>
        </div>
        <div className="product clearfix flex ">
          <div className="product_detail-image flex-1">
            <img className="w-[100%]" src={products.imageProduct} alt="" />
          </div>
          <div className="content-product_detail flex-1">
            <div className="title-product_detail text-primary font-bold text-2xl ">
              {products.name}
              <p className="border-solid border-b border-primary mt-[10px] mb-[10px]"></p>
            </div>
            <div className="price-product_detail mb-[10px]">
              <div className="price block">
                {/* giá gốc */}
                <span className="text-primary mr-4">Giá niêm yết:</span>
                <span
                  className={
                    products.discount
                      ? "price-old text-black"
                      : "list-none text-black"
                  }
                >
                  {products.price}
                </span>
                {/* giá khuyễn mãi */}
                <br />
                <span
                  className={products.discount ? "text-primary mr-4" : "hidden"}
                >
                  Giá khuyến mãi:
                </span>
                <span
                  className={products.discount ? "text-red-600 pr-3" : "hidden"}
                >
                  {products.total}
                </span>
                <p className="border-solid border-b border-primary mb-1 mt-1"></p>
                <div>
                  <span className="text-primary">Tình trạng: </span>
                  <span>{products.stock === 0 ? "Hết hàng" : "Còn hàng"}</span>
                </div>
              </div>
            </div>
            <div className="description-product_detail">
              <p className="underline text-primary">Mô tả</p>
              {products.description}
            </div>
            <div className="purchase-details mt-5 text-primary">
              <div className="purchase-details_quantity inline-block mr-[20px]">
                <p className="mb-4">Số lượng</p>

                <span className="product-minus border-solid border-2 border-black p-2">
                  <button>
                    <MinusOutlined />
                  </button>
                </span>
                <input
                  className="product-input border-solid border-2 border-black p-[7px] w-[100px] text-center"
                  type="number"
                  min={1}
                  size={2}
                />
                <span className="product-minus border-solid border-2 border-black p-2">
                  <button>
                    <PlusOutlined />
                  </button>
                </span>
              </div>
              <div className="purchase-details_button inline-block w-[250px]">
                {/* <button className="border p-2 bg-primary text-white">
                  Add to card
                </button> */}
                <ButtonAddToCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
