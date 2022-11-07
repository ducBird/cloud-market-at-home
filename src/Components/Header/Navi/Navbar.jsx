import React from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './navbar.css';

function Navbar() {
  return (
    <>
      <nav className="text-white rounded bg-primary">
        <ul className="flex justify-between w-[70%] mx-auto font-bold">
          <li className="li-nav">
            <a href="" className="">
              {/* Home */}
              Trang Chủ
            </a>
          </li>
          <li className="relative li-nav li-nav-shop">
            <a href="" className="">
              {/* Shop */}
              Sản Phẩm
            </a>
            <BsFillCaretDownFill />
            <ul className="sub-nav-shop">
              <li>
                <a href="">UƯ ĐÃI</a>
              </li>
              <li>
                <a href="">Gà</a>
              </li>
              <li>
                <a href="">Vịt</a>
              </li>
              <li>
                <a href="">Thịt Heo</a>
              </li>
              <li>
                <a href="">Thịt Đỏ, Thịt Bò, Thịt Cừu</a>
              </li>
              <li>
                <a href="">Cá và Hải Sản</a>
              </li>
              <li>
                <a href="">Rau Củ</a>
              </li>
              <li>
                <a href="">Trái Cây</a>
              </li>
              <li>
                <a href="">Trứng</a>
              </li>
              <li>
                <a href="">Đồ Chay</a>
              </li>
            </ul>
          </li>
          <li className="li-nav">
            <a href="" className="">
              {/* About Us */}
              Về Chúng Tôi
            </a>
            <BsFillCaretDownFill />
          </li>
          <li className="li-nav">
            <a href="" className="">
              {/* Community */}
              Cộng Đồng
            </a>
            <BsFillCaretDownFill />
          </li>
          <li className="li-nav">
            <a href="" className="">
              {/* Contact Us */}
              Liên Hệ
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
