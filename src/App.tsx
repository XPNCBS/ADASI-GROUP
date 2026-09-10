import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Products from "./pages/Products";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import News from "./pages/News";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
