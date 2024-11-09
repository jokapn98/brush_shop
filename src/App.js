import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Shop" element={<ShopPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
