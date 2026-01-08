import { createContext, useState } from "react";

export const Ejercicio3tema = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light"); // "light" o "dark"

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <Ejercicio3tema.Provider value={{ theme, toggleTheme }}>
      {children}
    </Ejercicio3tema.Provider>
  );
}