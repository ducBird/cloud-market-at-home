import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCaretDownFill } from 'react-icons/bs';
import './navbar.css';

function Navbar() {
  return (
    <>
      <nav className="text-white rounded bg-primary">
        <ul className="flex justify-between w-[70%] mx-auto font-bold">
          <li className="li-nav">
            <Link to={'/'}>
              {/* Home */}
              Trang Chủ
            </Link>
          </li>
          <li className="relative li-nav li-nav-shop">
            <Link to={'/shop'}>
              {/* Shop */}
              Sản Phẩm
            </Link>
            <BsFillCaretDownFill />
            <ul className="sub-nav-shop">
              <li>
                <a href="">ƯU ĐÃI</a>
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
            <Link to={'aboutUs'}>
              {/* About Us */}
              Về Chúng Tôi
            </Link>
            <BsFillCaretDownFill />
          </li>
          <li className="li-nav">
            <Link to={'community'}>
              {/* Community */}
              Cộng Đồng
            </Link>
            <BsFillCaretDownFill />
          </li>
          <li className="li-nav">
            <Link to={'contactUs'}>
              {/* Contact Us */}
              Liên Hệ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
