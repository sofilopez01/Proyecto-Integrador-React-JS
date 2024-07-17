import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "../components/contact/contact";
import Products from "../components/products/products";
import About from "../components/about/about";
import Home from "../components/home/home";
import App from "../app";
export default function RoutesProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
