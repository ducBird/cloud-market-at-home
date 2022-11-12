import React from "react";
import Data from "./Data";
import "./data.css";
const List = () => {
  return (
    <div className="w-[80%] mx-auto">
      <div className="border-b border-primary pt-20 mb-10">
        <h2 className="text-3xl text-center font-bold pb-5 text-primary">
          Theo thể loại cửa hàng
        </h2>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-5">
        {Data.map((item, index) => {
          return (
            <div key={index} className="btn__hover relative ">
              <div className="btn__radius h-80 overflow-hidden rounded-md">
                <img
                  src={item.img}
                  alt=""
                  className="btn__product h-full w-full cursor-pointer object-cover"
                />
              </div>
              <p className="text-center text-2xl text-primary font-bold m-4">
                {item.title}
              </p>
              {/* <div className=""> */}
              <button className="btn__images m-auto w-[100px] border border-white border-spacing-[10px] p-[5px] text-white text-center hover:text-white hover:bg-primary absolute top-[35%] left-[35%] transition">
                <div className="font-bold">Cửa hàng</div>
              </button>
              {/* </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
