import React from "react";
import { useParams } from "react-router-dom";
function ProductDetail() {
  let id = useParams().id;
  return <div>{id}</div>;
}

export default ProductDetail;
