import {useState} from 'react'
import {useLocation} from 'react-router-dom'

export default function Contacto() {
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [mensaje, setMensaje] = useState('')

    const ubicacion = useLocation()

    const mascotaSeleccionada = ubicacion.state?.nombre
    const imagenSeleccionada = ubicacion.state?.imagen
  return (
    <div>
        <h1>Contacto</h1>
        <p>Escribinos para conocer más sobre la adopción.</p>

        <div className='contenedorContacto'>
            {mascotaSeleccionada && (
                <div className='mascotaSeleccionada'>
                    <h3>❤️ Quiero adoptar a {mascotaSeleccionada}</h3>
                    <img src={imagenSeleccionada} alt={mascotaSeleccionada} />
                </div>
            )}

            {/*required indica que ese campo es obligatorio*/}
            <form action='https://formsubmit.co/vaninaorellana@outlook.com.ar' method='POST'>
                <label>Nombre:</label>
                <input type='text' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} required
            />
            <input type='hidden' name='mascota' value={mascotaSeleccionada || 'Sin seleccionar'}/>

            <label>Correo electrónico:</label>
            <input type='email' name='email' value={correo} onChange={(e) => setCorreo(e.target.value)} required/>

            <label>Mensaje:</label>
            <textarea name='mensaje' value={mensaje} onChange={(e) => setMensaje(e.target.value)} required/>

            <button type='submit'>Enviar mensaje</button>
        </form>

        <div className='mapa'>
            <h3>Ubicación</h3>

        {/*iframe es una etiqueta que permite mostrar contenido de otra pagina dentro del sitio, en este caso el mapa*/}
            <iframe title="Mapa de ubicación"
                src="https://www.google.com/maps?q=Salta,Argentina&output=embed"
                width="400"
                height="300"
                loading="lazy"
            ></iframe>
        </div>
      </div>
    </div>
  )
}
