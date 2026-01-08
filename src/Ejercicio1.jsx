import { useState } from "react";

function Ejercicio1(){
    const [contador, setContador] = useState(2);

    const incrementar =() =>{
        if(contador < 15){
            setContador(contador+1);
        }
    };

    const reducir = () => {
        if(contador > 2){
            setContador(contador - 1)
        }
    };

    return(
        <div style={styles.contenedor}>
            <h2 style={styles.texto}>Contador: {contador}</h2>
            <div style={styles.botones}>
                <button onClick={incrementar}>+</button>
                <button onClick={reducir}>-</button>
            </div>
            

            {contador === 15 && (
                <h3 style={styles.texto}>¡Has alcanzado el límite máximo !</h3>
            )}

            {contador === 2 && (
                <h3 style={styles.texto}>Has alcanzado el límite inferior</h3>
            )}
        </div>
    );

}

const styles = {
    contenedor: {
        position: "absolute",
        top: "1rem",    
        left: "1rem",
        backgroundColor: "#f2f2f2", 
        color: "#000",
        padding: "1rem",
        textAlign: "left",
        borderRadius: "0.75rem",
        width: "fit-content"
    },
    botones: {
      display: "flex",
      gap: "0.5rem" 
    },
    texto: {
      marginBottom: "0.5rem"
    }
  };

export default Ejercicio1;