import React, { useEffect, useState } from "react";
import api from "../api";
import { Link } from "react-router-dom";

const Home = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    api.get("/categorias").then((response) => {
      setCategorias(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Minhas Coleções</h1>
      {categorias.map((cat) => (
        <div key={cat.id}>
          <Link to={`/categoria/${cat.id}`}>{cat.nome}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
