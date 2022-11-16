/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./ShopSideBar.css";
function ShopSideBar() {
  return (
    <div className="side-bar mr-[20px]">
      <div className="side-bar-block pr-[40px] border-r border-primary">
        <h4 className="toggle text-primary text-[20px] font-bold">
          Sản phẩm của chúng tôi
        </h4>
        <ul className="toggle_list">
          <li>
            <a className="active" href="">
              Ưu đãi
            </a>
          </li>
          <li>
            <a className="active" href="">
              Gà
            </a>
          </li>
          <li>
            <a className="active" href="">
              Thịt lợn
            </a>
          </li>
          <li>
            <a className="active" href="">
              Thịt bò
            </a>
          </li>
          <li>
            <a className="active" href="">
              Rau
            </a>
          </li>
          <li>
            <a className="active" href="">
              Trái cây
            </a>
          </li>
          <li>
            <a className="active" href="">
              Trứng
            </a>
          </li>
          <li>
            <a className="active" href="">
              Gia vị
            </a>
          </li>
          <li>
            <a className="active" href="">
              Món chay
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ShopSideBar;
