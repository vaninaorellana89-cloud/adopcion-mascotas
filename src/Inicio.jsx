import {useEffect, useState} from 'react'

export default function Inicio() {
    const [perros, setPerros] = useState([])

    useEffect(() => {
    cargarPerros()
    }, [])

    async function cargarPerros() {
        try {
            //muestra aleatoriamente 6 imagenes
            const respuesta = await fetch('https://dog.ceo/api/breeds/image/random/6')
            const datos = await respuesta.json()
            setPerros(datos.message)
        } catch (error) {
            console.log('Error al cargar los perros', error)
        }
    }
  return (
    <div>
        <h1>Bienvenidos a Huellitas 🐾</h1>
        <p>Conocé a nuestros amigos de cuatro patas.</p>

        <div className='contenedorPerros'>
            {perros.map((perro, index) => (
                <div key={index}>
                    <h3>Perro N° {index + 1}</h3>
                    <img src={perro} alt='Perro' width='200' />
                    <p>Raza: {perro.split('/')[4]}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
