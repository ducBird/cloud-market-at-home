import React from "react";
import { useCarts } from "../../../hooks/useCart";
import "./AddToCard.css";

function ButtonAddToCard(props) {
  const { add } = useCarts((state) => state);
  // console.log(props.addToCart);
  return (
    <div className="add-to-card border-2  border-black mt-4  hover:bg-primary transition-all ease-in duration-200">
      <button
        className="p-[9px] text-black hover:text-white text-sm"
        onClick={() => {
          console.log(props.product.stock);
          add(props.product);
        }}
      >
        {props.product.stock === 0 ? "Hết hàng" : "Thêm vào giỏ hàng"}
      </button>
    </div>
  );
}

export default ButtonAddToCard;
