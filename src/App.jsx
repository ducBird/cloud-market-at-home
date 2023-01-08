import "./App.css";
import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HomePage from "./Components/Home";
import ShopPage from "./Components/Shop/ShopPage";
import Categories from "./Components/Shop/components/ListProducts/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./Components/Shop/components/ProductDetail/ProductDetail";
import AboutUs from "./Components/AboutUs";
import Community from "./Components/Community";
import Contactus from "./Components/ContactUs";
import ShoppingCard from "./Components/Shop/ShoppingCard/ShoppingCard";
import Login from "./Components/Home/Accounts/Login/login";
import Register from "./Components/Home/Accounts/Register/register";
import RecipesPage from "./Components/Community/Recipes/RecipesPage";
import VegetarianPage from "./Components/Community/VegetarianCommunity/VegetarianPage";
import ShopOrder from "./Components/Shop/ShopOrder";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <section className="relative w-[100%] top-[130px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:categoryId" element={<Categories />} />
            <Route path="/shop/hotdeal" element={<Categories />} />
            <Route path="/shop/:categoryId/:id" element={<ProductDetail />} />
            <Route path="/shop/card" element={<ShoppingCard />} />
            <Route path="/shop/order" element={<ShopOrder />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contactUs" element={<Contactus />} />
            <Route path="/accounts/login" element={<Login />} />
            <Route path="/accounts/register" element={<Register />} />
            <Route path="/community/recipes" element={<RecipesPage />} />
            <Route path="/community/vegetarian" element={<VegetarianPage />} />

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>404 Page not found 😂😂😂</p>
                </main>
              }
            />
          </Routes>
          {/* <footer> */}
          <Footer />
          {/* </footer> */}
        </section>
      </BrowserRouter>
    </div>
  );
}

export default App;
