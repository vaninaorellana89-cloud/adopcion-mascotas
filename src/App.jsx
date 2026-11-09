import { useState } from 'react'
import Inicio from './Inicio'
import Mascotas from './Mascotas'
import Contacto from './Contacto'
import { BrowserRouter,Routes, Route, Link } from 'react-router-dom'
import './estilos.css'

function App() {

  return (
    <BrowserRouter>
      <>
        <header>
          <h1>Huellitas 🐾</h1>

          <nav>
            <Link to='/'>Inicio</Link> |{' '}
            <Link to='/mascotas'>Mascotas</Link> |{' '}
            <Link to='/contacto'>Contacto</Link>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/mascotas' element={<Mascotas/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
          </Routes>
        </main>

        <footer>
          <p>Huellitas 🐾 - Un hogar para cada huellita</p>
        </footer>
      </>
    </BrowserRouter>

  )
}

export default App
