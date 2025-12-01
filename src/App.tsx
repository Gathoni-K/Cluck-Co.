import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import OrderReviews from './pages/OrderReviews';


function App() {

  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/products" element={<Products />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/orderreviews" element={<OrderReviews />} />


      
    </Routes>
    </BrowserRouter>
  )
}

export default App
