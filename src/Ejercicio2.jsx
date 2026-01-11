import { useContext, useState } from "react";
import { Ejercicio3tema } from "./Ejercicio3tema";

function Ejercicio2(){

  const { theme } = useContext(Ejercicio3tema);
  const [tareas, setTareas] = useState([
    {id:1, texto: "Cocinar", completada: false},
    {id:2, texto: "Fregar", completada: false},
    {id:3, texto: "Hacer ejercicio", completada: false},
    {id:4, texto: "Leer", completada: false},
    {id:5, texto: "Hacer deberes", completada: false},
  ]);
  const [nuevaTarea, setNuevaTarea] = useState("");
  const [filtro, setFiltro] = useState("todas");

  const añadirTarea = () => {
    if (nuevaTarea.trim() === "") return;
    
    const ultimoId = tareas.length > 0 ? tareas[tareas.length - 1].id : 0;
    
    const nueva = {
      id: ultimoId + 1,
      texto: nuevaTarea,
      completada: false,
    };
    
    setTareas([...tareas, nueva]);
    setNuevaTarea("");
  };

  const cambiarEstado = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id
        ? { ...tarea, completada: !tarea.completada }
        : tarea
      )
    );
  };

  const tareasFiltradas = tareas.filter((tarea) => {
    if(filtro === "completadas") return tarea.completada;
    if(filtro === "pendientes") return !tarea.completada;
    return true;
  });
  return (
    <div style={{
      ...estilos.contenedor,
      backgroundColor: theme === "light" ? "white" : "#222",
      color: theme === "light" ? "#000" : "#fff"
    }}>
      <h2 style={{
        ...estilos.h2,
        color: theme === "light" ? "black" : "white"
      }}>Lista de tareas</h2>

      <div style={{marginTop:"1rem" , marginBottom: "0.5rem"}}>

        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva tarea"
          style={estilos.input}
        />
        <button onClick={añadirTarea} style={estilos.botonAñadir}>Añadir</button>

      </div>
    
      <div style={{marginBottom: "1rem"}}>
        <button onClick={() => setFiltro("todas")} style={estilos.botonFiltro}>Todas</button>
        <button onClick={() => setFiltro("pendientes")}style={estilos.botonFiltro}>Pendientes</button>
        <button onClick={() => setFiltro("completadas")}style={estilos.botonFiltro}>Completadas</button>
      </div>
    
      <ul style={estilos.lista}>
        {tareasFiltradas.map((tarea) => (
          <li key={tarea.id} style={estilos.fila}>
            <span
              style={{
                ...estilos.textoTarea,
                color: theme === "light" ? "#000" : "#fff",
                textDecoration: tarea.completada ? "line-through" : "none",
              }}
            >
              {tarea.texto}
            </span>
            <input
              type="checkbox"
              checked={tarea.completada}
              onChange={() => cambiarEstado(tarea.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );


}

const estilos = {
  contenedor: {
    position: "absolute",
    top: "14rem",    
    left: "1rem",
    padding: "1rem",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "white", // TODO: fondo blanco
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "1rem auto",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  h2: {
    borderRadius: "8px",
    padding: "0.5rem",
    textDecoration: "underline",
    display: "inline-block",
    color: "black"
  },
  input: {
    padding: "0.5rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginRight: "0.5rem",
    width: "150px",
  },
  botonAñadir: {
    padding: "0.5rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    width: "150px",
  },
  botonFiltro: {
    padding: "0.3rem 0.6rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    cursor: "pointer",
    marginRight: "0.3rem",
    fontSize: "0.8rem",
  },
  lista: {
    listStyle: "none",
    padding: 0,
    marginTop: "1rem",
    borderCollapse: "collapse",
    width: "100%",
    color: "black"
  },
  fila: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #ccc",
    padding: "0.5rem 0",
  },
  textoTarea: {
    flex: 1,
    marginRight: "0.5rem",
  },
};

export default Ejercicio2;