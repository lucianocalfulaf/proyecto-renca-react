import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function SubirCategoria() {
  const [nombreRuta, setNombreRuta] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [certificado, setCertificado] = useState(null); // Cambiado a null

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(); // Utiliza FormData para enviar archivos

    formData.append('nombreRuta', nombreRuta);
    formData.append('descripcion', descripcion);
    formData.append('certificado', certificado); // Agrega el archivo al formData

    try {
      const response = await axios.post("http://localhost:4000/rutas", formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Asegúrate de establecer el tipo de contenido como 'multipart/form-data'
        }
      });

      console.log('Ruta creada:', response.data);

      setNombreRuta('');
      setDescripcion('');
      setCertificado(null); // Reiniciar el estado del archivo después de enviarlo
    } catch (error) {
      console.error('Hubo un problema al enviar la ruta:', error);
    }
  };

  return (
    <div className="mc-container">
      <h2 className='tituloFormularioSubida'>Formulario de Nueva Ruta</h2>
      <form className='contenedorFormulario' onSubmit={handleSubmit}>
        <div className='descripcionFormulario'>
          <div className='textoFormulario'>
            <div className='cursosDisponibles'>

              <div className="cardsContainer">
                <div className="buttonContainer">
                  <div>
                    <label>
                      Nombre de la Ruta:
                      <input type="text" value={nombreRuta} onChange={(e) => setNombreRuta(e.target.value)} />
                    </label>
                  </div>
                  <div>
                    <label>
                      Descripción:
                      <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                    </label>
                  </div>
                  <div>
                    <label>
                      Certificado:
                      <input type="file" onChange={(e) => setCertificado(e.target.files[0])} />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className='btn btn-primary'>Enviar</button>
      </form>
      <Link to="/ver-categoria-admin"><button className='btn btn-primary'>Volver</button></Link>
    </div>
  );
};

export default SubirCategoria;
