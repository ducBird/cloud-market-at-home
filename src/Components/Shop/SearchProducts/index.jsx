import React from "react";
import { useSearchParams } from "react-router-dom";
import { axiosClient } from "../../../libraries/axiosClient";
import Products from "../components/Products/Products";
import ShopSideBar from "../components/SideBar/ShopSideBar";

function SearchProducts() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name");
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    if (name) {
      axiosClient
        .post("/products/tim-kiem-san-pham", { name: name })
        .then((response) => {
          setProducts(response.data);
        });
    }
  }, [name]);

  return (
    <div className="container sm:mt-[160px] lg:mt-[180px] xl:mt-[192px] sm:w-[550px] lg:w-[950px] xl:w-[1150px] 2xl:w-[1320px]">
      <p className="mb-3 text-black font-bold sm:ml-2 lg:ml-0 lg:mt-3 lg:mb-10">
        CÁC SẢN PHẨM VỪA TÌM THẤY
      </p>
      <div className="flex sm:mt-[]">
        <ShopSideBar />
        {products == null ? (
          <div>
            <p>Không tìm thấy sản phẩm nào</p>
          </div>
        ) : (
          <Products products={products} />
        )}
      </div>
    </div>
  );
}

export default SearchProducts;
