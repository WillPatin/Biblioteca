import React, { useEffect, useState } from "react";
import api from "../api";
import { useParams } from "react-router-dom";

const Colecao = () => {
  const { id } = useParams();
  const [itens, setItens] = useState([]);

  useEffect(() => {
    api.get(`/itens/${id}`).then((response) => {
      setItens(response.data);
    });
  }, [id]);

  return (
    <div>
      <h2>Itens da Coleção</h2>
      {itens.map((item) => (
        <div key={item.id}>
          <p>Número: {item.numero}</p>
          <p>Título: {item.titulo}</p>
          <p>Status: {item.adquirido ? "Adquirido" : "Faltando"}</p>
        </div>
      ))}
    </div>
  );
};

export default Colecao;
