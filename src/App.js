import './App.css';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
