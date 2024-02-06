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
    <section>
      <h1>¿Qué quieres hacer hoy?</h1>
      <button type="button" className="submit-button" onClick={handleCreate}>
        Crear un nuevo cuento
      </button>

      <button type="button" className="submit-button" onClick={handleEdit}>
        Editar un cuento existente{" "}
      </button>

      <button type="button" className="submit-button" onClick={handleShow}>
        Ver todos los cuentos
      </button>

      <button className="normal-button" onClick={logOut}>
        Cerrar sesión
      </button>
    </section>
  );
};

export default Dashboard;
