//import './App.css';
import Nav from './components/Nav'
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
//import Allroutes from './components/Allroutes';
import Home from './pages/Home';
import ProductPage from './pages/ProductsPage';
import CartPage from './pages/CartPage'; 
function App() {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <>
    <Nav />
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={<ProductPage selectedProducts={selectedProducts} setSelectedProducts={setSelectedProducts} />}
        />
        <Route
          path="/cart"
          element={<CartPage key={Math.random()} selectedProducts={selectedProducts} />}
        />
      </Routes>
    </div>
    </>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <Allroutes />
//     </div>
//   );
// }