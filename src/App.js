import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/Header/Header";
import Footer from "./components/Footer/Footer";
import './assets/styles/style.css';
import { useState } from "react";

function App() {
  const [keyid, setKeyid] = useState(1);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home setKeyid={setKeyid} />} />
        <Route path="/product" element={<ProductPage keyid={keyid} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
