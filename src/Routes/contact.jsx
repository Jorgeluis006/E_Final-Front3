import React, { useState } from 'react';
import axios from 'axios';
import { ContextGlobal } from '../Components/utils/global.context';



function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleNombreChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el objeto de datos a enviar
    const data = {
      name,
      email,
      message
    };

    // Hacer la solicitud POST al servidor utilizando Axios
    axios.post('URL_DEL_SERVIDOR', data)
      .then((response) => {
        // La solicitud se completó correctamente
        console.log(response.data); // Puedes mostrar los datos de respuesta por consola
        setEnviado(true); // Mostrar mensaje de éxito
      })
      .catch((error) => {
        // Ocurrió un error en la solicitud
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Contacto</h1>
      {enviado ? (
        <p>¡Formulario enviado correctamente!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} onChange={handleNombreChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}



export default Contact;