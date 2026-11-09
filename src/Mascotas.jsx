import { useNavigate } from 'react-router-dom'
import { mascotas } from './datos/mascotas'
import React from 'react'

export default function Mascotas() {
    const navegar = useNavigate()

    function adoptarMascota(mascota) {
        navegar('/contacto', { state: { nombre: mascota.nombre, imagen: mascota.imagen } })
    }
  return (
    <div>
        <h1>Mascotas en adopción</h1>
        <p>Conocé a quienes buscan un hogar.</p>

        <div className='contenedorMascotas'>
            {mascotas.map((mascota) => (
                <div className='tarjetaMascota' key={mascota.id}>
                    <h3>{mascota.nombre}</h3>
                    <img src={mascota.imagen} alt={mascota.nombre} width='200' />
                    <p>Tipo: {mascota.tipo}</p>
                    <p>Edad: {mascota.edad}</p>
                    <p>{mascota.descripcion}</p>
                    <button onClick={() => adoptarMascota(mascota)}>❤️ Quiero adoptar</button>
                </div>
            ))}


        </div>
    </div>
  )
}
