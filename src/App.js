import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ContactPage from "./pages/ContactPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Shop" element={<ShopPage />} />
        <Route exact path="/ProductDetails" element={<ProductDetailsPage />} />
        <Route exact path="/Contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
