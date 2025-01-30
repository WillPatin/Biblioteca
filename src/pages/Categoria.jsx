import React, { useEffect, useState } from "react";
import api from "../api";
import { Link, useParams } from "react-router-dom";

const Categoria = () => {
  const { id } = useParams();
  const [colecoes, setColecoes] = useState([]);

  useEffect(() => {
    api.get(`/colecoes/${id}`).then((response) => {
      setColecoes(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Coleções</h2>
      {colecoes.map((col) => (
        <div key={col.id}>
          <Link to={`/colecao/${col.id}`}>{col.nome}</Link>
        </div>
      ))}
    </div>
  );
};

export default Categoria;
