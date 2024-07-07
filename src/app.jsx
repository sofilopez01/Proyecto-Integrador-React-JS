import React from "react";
import "./app.css";
import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Products from "./components/products/products";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
