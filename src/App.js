
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from "./pages/Dashboard";
import EquipoCctv from "./pages/EquipoCctv";
import EquipoAlarma from "./pages/EquipoAlarma";
import EnTransitoPage from "./pages/EnTransitoPage";
import EntradasPage from "./pages/EntradasPage";
import PorRevisarLlegadaPage from "./pages/PorRevisarLlegadaPage";
import ProyectosPage from "./pages/ProyectosPage";
import SucursalesPage from "./pages/SucursalesPage";
import UsersPage from "./pages/UsersPage";
import Navbar from "./components/Navbar";
import NuevoProyecto from "./pages/proyecto/NuevoProyecto";
import VerProyecto from "./pages/proyecto/VerProyecto";
import EditarProyecto from "./pages/proyecto/EditarProyecto";
import VerActivoCctv from "./pages/equipocctv/VerActivoCctv";
import NuevoActivoCctv from "./pages/equipocctv/NuevoActivoCctv";
import EditarActivoCctv from "./pages/equipocctv/EditarActivoCctv";

const App = () =>{
  return (
    <div>
      <Navbar />
      <div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path="/equipoCctv" element={<EquipoCctv />} />
              <Route path="/equipoAlarma" element={<EquipoAlarma/>} />
              <Route path="/transito" element={<EnTransitoPage/>} />
              <Route path="/entradas" element={<EntradasPage/>} />
              <Route path="/porRevisarLlegada" element={<PorRevisarLlegadaPage/>} />
              <Route path="/Proyectos" element={<ProyectosPage/>} />
              <Route path="/Sucursales" element={<SucursalesPage/>} />
              <Route path="/users" element={<UsersPage/>} />
              <Route path="/nuevo-proyecto" element={<NuevoProyecto/>} />
              <Route path="/ver-proyecto" element={<VerProyecto/>} />
              <Route path="/editar-proyecto" element={<EditarProyecto/>} />
              <Route path="/ver-activo-cctv" element={<VerActivoCctv/>} />
              <Route path="/nuevo-activo-cctv" element={<NuevoActivoCctv/>} />
              <Route path="/editar-activo-cctv" element={<EditarActivoCctv/>} />
            </Routes>
          </Sidebar>        
      </BrowserRouter>
    </div>
    </div>
  );
};

export default App;
