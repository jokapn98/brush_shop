import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ContactPage from "./pages/ContactPage";
import ProductManipulationPage from "./pages/ProductManipulationPage";
function App() {
<<<<<<< HEAD
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop/page/:pageNum" element={<ShopPage />} />

        <Route exact path="/ProductDetails" element={<ProductDetailsPage />} />
        <Route exact path="/Contact" element={<ContactPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route
          exact
          path="/manipulation"
          element={<ProductManipulationPage />}
        />
      </Routes>
    </BrowserRouter>
  );
=======
  return <div className="App">test onx</div>;
>>>>>>> development
}

export default App;
