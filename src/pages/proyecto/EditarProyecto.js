import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../fetch/useFetch";
import { useState } from "react";
import "../../styles/content.css";

const EditarProyecto = () =>{

  const [nombre, setNombre] = useState("");
  const [fechaEntrada, setFechaEntrada] = useState("");
  const [fechaSalida, setFechaSalida] = useState("");
  const [userId, setUserId] = useState(1);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data } = useFetch(`http://172.16.14.127:8080/proyecto/get-proyecto?id=${id}`, {method: 'POST'});

  // nombre = setNombre(data.proyecto.nombre);
  // fechaEntrada = setFechaEntrada(data.proyecto.fechaEntrada);
  // fechaSalida = setFechaSalida(data.proyecto.fechaSalida);

  const handlePost = () => {
    const dataPost = { content:{id:id,nombre, fechaEntrada, fechaSalida, userId} };
    console.log('nombre:', nombre);
    console.log('fechaEntrada:', fechaEntrada);
    console.log('fechaSalida:', fechaSalida);
    console.log('userId:', userId);
    console.log(data);
    fetch(`http://172.16.14.127:8080/proyecto/post-edit-proyecto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    })
      .then((response) => {
        // window.location.href = '/';
      })
      .catch((error) => {
        console.error("Hubo un problema al eliminar el registro:", error);
      });
  };

  if (!data) {
    return <p>Cargando...</p>;
  }

  if (!data.proyecto) {
    return <p>Proyecto no encontrado</p>;
  }
  return (
    <div className="container-content">
      <div className="title">
        <h1>Editar Proyecto</h1>
      </div>
      <div className="content">
      <form class="add-form" action="/" method="">
            <div class="form-control">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" value={data.proyecto.nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="fechaEntrada">Fecha de Entrada</label>
                <input type="date" name="fechaEntrada" id="fechaEntrada" value={data.proyecto.fechaEntrada} onChange={(e) => setFechaEntrada(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="fechaSalida">Fecha de Salida</label>
                <input type="date" name="fechaSalida" id="fechaSalida" value={data.proyecto.fechaSalida} onChange={(e) => setFechaSalida(e.target.value)}/>
            </div>

            <button class="btn" type="button" onClick={handlePost}>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default EditarProyecto;