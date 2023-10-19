import React from "react";
import "../styles/content.css";
import { useFetch } from "../fetch/useFetch";
import DataTable from "../components/DataTable.js";
import TitleTable from "../components/TitleTable";

const Dashboard = () =>{

  const { data } = useFetch("http://172.16.14.127:8080/proyecto/get-all");
  console.log(data);
  // console.log(data.proyecto);

  const columns = ['id', 'nombre', 'fechaEntrada', 'fechaSalida', 'estatus', 'folio', 'guia', 'razon', 'createdAt', 'updatedAt', 'userId','Actions'];

  return (
    <div className="container-content">
      <div className="title">
        <h1>Dashboard</h1>
      </div>
      <div className="content">
        <div>
          <TitleTable tableName='Proyectos recientes' page='/nuevo-proyecto' />
        </div>
      {data && data.proyecto && data.proyecto.length > 0 ? (
          <DataTable columns={columns} data={data.proyecto} />
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;