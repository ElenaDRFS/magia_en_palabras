//muestra todos los cuentos y un botón de borrar que hace el axios delete

import React, { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import AdminCard from "./AdminCard/AdminCard";

const AllTales = () => {
  const [allTales, setAllTales] = useState([]); //todos los cuentos bbdd
  // estados paginación, el primero dirá en que pag se empieza, el segundo los cuentos por pag
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    const getAllTales = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/tales");

        setAllTales(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllTales();
  }, []);

  // mapeamos los cuentos por pag para pintarlos. si lo hacemos con los de la bbdd se pintan todos seguidos, hay que mapear los que queremos que se pinten por pag
  const mapTales = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTales = allTales.slice(indexOfFirstItem, indexOfLastItem);

    return currentTales.map((obj) => <AdminCard key={uuidv4()} data={obj} />);
  };

  // creamos los controles de navegación
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(allTales.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const renderPageNumbers = pageNumbers.map((number) => (
    <button key={number}>
      <a href="#" onClick={() => setCurrentPage(number)}>
        {number}
      </a>
    </button>
  ));

  return (
    <div>
      <Link to="/admin">
        <img src="./src/assets/img/volver.png" alt="flecha" />
      </Link>
      <section id="page-numbers">{renderPageNumbers}</section>

      {mapTales()}
    </div>
  );
};

export default AllTales;
