import React, { useState } from "react";
import "./app.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <Header isOpen={menuOpen} toggleMenu={toggleMenu} />
      <div className={`overlay ${menuOpen ? "open" : ""}`} onClick={toggleMenu}></div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
