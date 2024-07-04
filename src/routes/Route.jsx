import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";
import CategoriProductPage from "../pages/CategoriProductPage/CategoriProductPage";
import CheckOutPage from "../pages/CheckOutPage/CheckOutPage";

import ProductSinglePage from "../pages/ProductSinglePage/ProductSinglePage";
import SearchPage from "../pages/SearchPage/SearchPage";
import SearchPageNotFound from "../components/searchComponent/SearchPageNotFound";
import ProFilePage from "../pages/ProfilePage/ProFilePage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProFilePage />} />
      <Route path="/category/:id" element={<CategoriProductPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/product/:id" element={<ProductSinglePage />} />
      <Route path="/search" element={<SearchPageNotFound />} />
      <Route path="/search/:searchTerm" element={<SearchPage />} />
    </Routes>
  );
};
// const AppRoutes = [
//   {
//     path: "/",
//     component: HomePage,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: true },
//   },
//   {
//     path: "/cart",
//     component: CartPage,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: false },
//   },
//   {
//     path: "/profile",
//     component: ProFilePage,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: true },
//   },
//   {
//     path: "/category/:id",
//     component: CategoriProductPage,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: true },
//   },
//   {
//     path: "/checkout",
//     component: CheckOutPage,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: true },
//   },
//   {
//     path: "/product/:id",
//     component: ProductSinglePage,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: true },
//   },
//   {
//     path: "/search",
//     component: SearchPageNotFound,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: true },
//   },
//   {
//     path: "/search/:searchTerm",
//     component: SearchPage,
//     layout: "DefaultLayout",
//     headerProps: { showHeader: true },
//   },
// ];
export default AppRoutes;
