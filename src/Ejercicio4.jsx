import { useState,useEffect, useRef } from "react";

function Ejercicio4(){

    const tiempoInicial = 15;
    const [tiempoRestante, setTiempoRestante] = useState(tiempoInicial);
    const intervaloRef = useRef(null);

    useEffect(() => {
        intervaloRef.current = setInterval(() => {
        setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervaloRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervaloRef.current);
    }, []);

const reiniciar = () => {
    clearInterval(intervaloRef.current);
    setTiempoRestante(tiempoInicial);

    intervaloRef.current = setInterval(() => {
      setTiempoRestante((prev) => {
        if (prev <= 1) {
          clearInterval(intervaloRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

   return (
    <div
      style={{
        position: "fixed",
        bottom: "4rem",
        left: "1rem",
        padding: "1rem",
        backgroundColor: "#0a1f44",
        borderRadius: "0.75rem",
        width: "14rem",
        color: "white",
      }}
    >
      <p>Tiempo restante: {tiempoRestante}s</p>
      <button onClick={reiniciar}>
        Reiniciar
      </button>
    </div>
  );

}

export default Ejercicio4;