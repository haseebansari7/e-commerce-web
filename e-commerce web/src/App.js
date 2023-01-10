import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navigation from "./Components/Navbar";
import "./app.css"
import Products from "./Components/Products";
import Product from "./Components/Product";
import Cart from "./Components/Cart";
function App() {
  return (
    <>

      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
