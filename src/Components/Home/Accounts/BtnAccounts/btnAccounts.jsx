import React from "react";
import "./btnAccountCss.css";
import {
  CloseOutlined,
  FacebookOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const BtnAccounts = ({
  text = "FaceBook",
  color = "#3b5998",
  textColor = "#ffff",
  fontSize = "20px",
  icon = "facebook",
}) => {
  return (
    <div>
      <a href="#">
        <div
          className="btnAccount cursor-pointer"
          style={{ background: color }}
        >
          <div className="" style={{ color: textColor, fontSize: fontSize }}>
            Đăng nhập với {text}
          </div>
          <div className="" style={{ fontSize: fontSize, color: textColor }}>
            <i class={`fa-brands fa-${icon}`}></i>
          </div>
        </div>
      </a>
    </div>
  );
};

export default BtnAccounts;
