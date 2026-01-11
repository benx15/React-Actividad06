import { useContext } from "react";
import { Ejercicio3tema } from "./Ejercicio3tema";



function Ejercicio3(){
  const { theme, toggleTheme } = useContext(Ejercicio3tema);

    
    
    return (
        <div style={{
          position:"fixed",
          top: "1rem",
          right: "1rem"
        }}>
          <button onClick={toggleTheme}>
            Cambiar a {theme === "light" ? "oscuro" : "claro"}
          </button>

        </div>
    );

}

export default Ejercicio3;