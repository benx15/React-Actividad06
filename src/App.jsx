import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Ejercicio1 from './Ejercicio1'
import Ejercicio2 from './Ejercicio2'
import Ejercicio3 from './Ejercicio3'
import Ejercicio4 from './Ejercicio4'
import { ThemeProvider } from './Ejercicio3tema'

function App() {


  return (
    <div>

    

      <ThemeProvider>
        <Ejercicio3/>
        <Ejercicio1/>
        <Ejercicio2/>
      </ThemeProvider>

      <Ejercicio4/>

    </div>
  )
}

export default App
