import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Form from './components/Form'
import '../src/assets/css/styles.css'
import Tarjeta from './components/Tarjeta'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Tarjeta titulo="Formulario estudiantes" parrafo="Diligencie el formulario para oficializar su registro"/>
    </div>
    <div>
       <Form/>
    </div>
  
    </>
  )    
}

export default App
