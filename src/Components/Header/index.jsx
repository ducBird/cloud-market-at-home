import React from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './headerStyle.css';
import {
  AiOutlineUser,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from 'react-icons/ai';
import CloudMarketLogo from '../../assets/header/logo/cloud-market.jpg';
import Navbar from './Navi/Navbar';
function Header() {
  return (
    <BrowserRouter>
      <div className="fixed top-0 left-0 right-0 z-10">
        <div className="flex items-center justify-between gap-3 px-3 pt-2 bg-white containerHeader">
          <div className="flex items-center flex-1 gap-5">
            <a href="http://localhost:3000/">
              <img
                src={CloudMarketLogo}
                alt="logo Cloud Market At Home"
                style={{ display: 'inline-block', width: '60px' }}
              />
              <span className="font-bold title-logo">Cloud Market AH</span>
            </a>
            <div className="ml-20 search-content">
              <button className="ml-2 search-icon">
                <AiOutlineSearch size={'28px'} className="opacity-80" />
              </button>
              <input
                type="text"
                className="rounded-tr-md rounded-bl-md rounded-br-3xl rounded-tl-3xl input-search"
                placeholder="Search..."
              />
            </div>
          </div>
          <div className="flex items-center gap-10 w-[300px]">
            <a
              href="#"
              className="flex items-center transition-all hover:text-primary"
            >
              <AiOutlineUser size={'24px'} />
              <span className="ml-2 font-bold">Login</span>
            </a>
            <div className="mini-cart rounded-tr-md rounded-bl-md rounded-br-3xl rounded-tl-3xl">
              <a href="#">
                <AiOutlineShoppingCart size={'24px'} />
              </a>
            </div>
          </div>
        </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Trang Chủ</div>} />
          <Route path="/shop" element={<div>Sản Phẩm</div>} />
          <Route path="/aboutUs" element={<div>Về Chúng Tôi</div>} />
          <Route path="/community" element={<div>Cộng Đồng</div>} />
          <Route path="/contactUs" element={<div>Liên Hệ</div>} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <p>404 Page not found 😂😂😂</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default Header;
