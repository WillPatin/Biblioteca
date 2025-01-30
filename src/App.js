import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Categoria from "./pages/Categoria";
import Colecao from "./pages/Colecao";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:id" element={<Categoria />} />
        <Route path="/colecao/:id" element={<Colecao />} />
      </Routes>
    </Router>
  );
};

export default App;
