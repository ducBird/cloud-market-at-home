import React from "react";
import { useCarts } from "../../../hooks/useCart";
import "./AddToCard.css";

function ButtonAddToCard(props) {
  const { add } = useCarts((state) => state);
  // console.log(props.addToCart);
  return (
    <div className="add-to-card border-solid border-2  border-black mt-4   hover:font-bold hover:bg-primary">
      <button
        className="p-[9px] text-black hover:text-white"
        onClick={() => {
          console.log(props.product);
          add(props.product);
        }}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
}

export default ButtonAddToCard;
