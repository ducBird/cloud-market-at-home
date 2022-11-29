import React from "react";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../../../libraries/axioClient";
function ProductDetail() {
  const { categoryId } = useParams();
  const { id } = useParams();
  const [product, setProduct] = React.useState([]);

  // get dữ liệu products
  React.useEffect(() => {
    axiosClient.get("/products/" + categoryId + "/" + id).then((response) => {
      setProduct(response.data);
    });
  }, [categoryId, id]);
  return (
    <div className="product-detail">
      <div className="container">
        <div>
          <img src={product.urlImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
