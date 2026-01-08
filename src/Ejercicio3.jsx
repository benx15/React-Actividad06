import { useContext } from "react";
import { Ejercicio3tema } from "./Ejercicio3tema";
import Ejercicio1 from "./Ejercicio1";
import Ejercicio2 from "./Ejercicio2";


function Ejercicio3(){
  const { theme, toggleTheme } = useContext(Ejercicio3tema);

    const styles = {
        backgroundColor: theme === "light" ? "#f0f0f0" : "#222",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "1rem",
        transition: "all 0.3s ease"
    };
    
    return (
        <div style={styles}>
          <button onClick={toggleTheme}>
            Cambiar a {theme === "light" ? "oscuro" : "claro"}
          </button>
          <Ejercicio1/>
          <Ejercicio2/>
        </div>
    );

}

export default Ejercicio3;