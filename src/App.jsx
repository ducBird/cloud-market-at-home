import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Components/Home";
import ShopPage from "./Components/Shop/ShopPage";
import Categories from "./Components/Shop/components/ListProducts/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductDetail from "./Components/Shop/components/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="relative App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <section className="relative top-[130px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:categoryId" element={<Categories />} />
            <Route path="/shop/:categoryId/:id" element={<ProductDetail />} />
            <Route path="/aboutUs" element={<div>Về Chúng Tôi</div>} />
            <Route path="/community" element={<div>Cộng Đồng</div>} />
            <Route path="/contactUs" element={<div>Liên Hệ</div>} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 Page not found 😂😂😂</p>
                </main>
              }
            />
          </Routes>
        </section>
        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
