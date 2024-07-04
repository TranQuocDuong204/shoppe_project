import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/Route";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeaderCart from "./components/headerCart/HeaderCart";
import toast, { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Toaster />
      <Router>
        {/* <Header /> */}
        <ConditionalHeader />
        <AppRoutes />
        <Footer />
      </Router>
    </>
  );
}
const ConditionalHeader = () => {
  const location = useLocation();
  const noHeaderRoutes = ["/cart", "/checkout", "/profile"];

  return !noHeaderRoutes.includes(location.pathname) ? (
    <Header />
  ) : (
    <HeaderCart />
  );
};

export default App;
