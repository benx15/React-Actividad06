import { useState } from "react";

function Ejercicio2(){
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
        <div>
          <h2>Lista de tareas</h2>
    
          <input
            type="text"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            placeholder="Nueva tarea"
          />
          <button onClick={añadirTarea}>Añadir</button>
    
          <div>
            <button onClick={() => setFiltro("todas")}>Todas</button>
            <button onClick={() => setFiltro("pendientes")}>Pendientes</button>
            <button onClick={() => setFiltro("completadas")}>Completadas</button>
          </div>
    
          <ul>
            {tareasFiltradas.map((tarea) => (
              <li key={tarea.id}>
                <input
                  type="checkbox"
                  checked={tarea.completada}
                  onChange={() => cambiarEstado(tarea.id)}
                />
                <span
                  style={{
                    textDecoration: tarea.completada ? "line-through" : "none",
                  }}
                >
                  {tarea.texto}
                </span>
              </li>
            ))}
          </ul>
        </div>
      );


}

export default Ejercicio2;