import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './VerCategoria.css';
function VerCategoria() {
  const [rutas, setRutas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/rutas");
        setRutas(response.data);
      } catch (error) {
        console.error('Hubo un problema al obtener las rutas:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Rutas de Aprendizaje</h1>
      <Link to="/subir-categoria-admin"><button className='btn btn-primary'>Crear Ruta Nueva</button> </Link>

      <div className='row'>
        {rutas.map((ruta) => (
          <div key={ruta._id} className='col-12'>
            <div className='card mb-4' style={{width: '100%', height: 'auto'}}>
                <div className='card-body'>
                  <h5 className='card-title'>{ruta.nombreRuta}</h5>
                  <p className='card-text'>{ruta.descripcion}</p>
                  <div className="d-flex flex-wrap ">

                    {ruta.curso.map((cursosRuta) => (
                      <div key={cursosRuta._id} className="p-2" style={{flex: '0 0 30%'}}>
                        <div className='card' style={{}}>
                          <img src={cursosRuta.imagen?.url} alt={cursosRuta.nombreCurso} className='card-img-top' style={{width: '100%', height: '200px', objectFit: 'cover'}} />
                          <div className='card-body'>
                            <h5 className='card-title'>{cursosRuta.nombreCurso}</h5>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    <Link to={`/modificar-categoria-admin`} ><button className='btn btn-primary'>Modificar Ruta</button></Link>
                  </div>
                </div>
            </div>
          </div>
        ))}
    </div>
    </div>
  );
}

export default VerCategoria;
