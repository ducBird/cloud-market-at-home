import React from "react";
import { Link } from "react-router-dom";
import { axiosClient } from "../../../libraries/axioClient";
import "./AddToCard.css";
function ButtonAddToCard(props) {
  return (
    <div className="add-to-card border-solid border-2 border-black bg-cyan-700 mt-4">
      {/* <Link to="/shop/card"> */}
      <button className="p-[9px] text-white" onClick={props.addToCart}>
        Thêm vào giỏ hàngs
      </button>
      {/* </Link> */}
    </div>
  );
}

export default ButtonAddToCard;
