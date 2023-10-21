import React from "react";
import "../../styles/content.css";
import { useState } from "react";

const NuevoActivoCctv = () =>{
    const [nombre, setNombre] = useState("");
    const [fechaEntrada, setFechaEntrada] = useState("");
    const [fechaSalida, setFechaSalida] = useState("");
    const [userId, setUserId] = useState(1);

    const handlePost = () => {
        const data = { content:{nombre, fechaEntrada, fechaSalida, userId} };
        console.log('nombre:', nombre);
        console.log('fechaEntrada:', fechaEntrada);
        console.log('fechaSalida:', fechaSalida);
        console.log('userId:', userId);
        console.log(data);
        fetch(`http://172.16.14.127:8080/proyecto/post-proyecto`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => {
            window.location.href = '/';
          })
          .catch((error) => {
            console.error("Hubo un problema al eliminar el registro:", error);
          });
    };
  return (
    <div className="container-content">
      <div className="title">
        <h1>Nuevo Proyecto</h1>
      </div>
      <div className="content">
      <form class="add-form" action="/" method="">
            <div class="form-control">
                <label for="nombre">Nombre</label>
                <input type="text" name="nombre" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="fechaEntrada">Fecha de Entrada</label>
                <input type="date" name="fechaEntrada" id="fechaEntrada" value={fechaEntrada} onChange={(e) => setFechaEntrada(e.target.value)}/>
            </div>
            <div class="form-control">
                <label for="fechaSalida">Fecha de Salida</label>
                <input type="date" name="fechaSalida" id="fechaSalida" value={fechaSalida} onChange={(e) => setFechaSalida(e.target.value)}/>
            </div>

            <button class="btn" type="button" onClick={handlePost}>Crear</button>
        </form>
      </div>
    </div>
  );
};

export default NuevoActivoCctv;