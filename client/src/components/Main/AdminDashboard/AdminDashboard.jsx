import React from "react";

import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleCreate = () => {
    navigate("/createTale");
  };

  const handleEdit = () => {
    navigate("/editTale");
  };

  const handleShow = () => {
    navigate("/allTales");
  };

  const logOut = async () => {
    navigate("/");
  };

  return (
    <section id="dashboard-section">
      <h1>¿Qué quieres hacer hoy?</h1>
      
      <article>
        <button
          type="button"
          className="dashboard-button"
          onClick={handleCreate}
        >
          Crear un nuevo cuento
        </button>

        <button type="button" className="dashboard-button" onClick={handleEdit}>
          Editar un cuento existente{" "}
        </button>

        <button type="button" className="dashboard-button" onClick={handleShow}>
          Ver todos los cuentos
        </button>
      </article>

      <article>
        <button className="normal-button" onClick={logOut}>
          Cerrar sesión
        </button>
      </article>
    </section>
  );
};

export default Dashboard;
