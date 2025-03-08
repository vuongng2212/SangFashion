// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShopPage from "./pages/ShopPage";
import ShopDetailPage from "./pages/ShopDetailPage";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ShopDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
