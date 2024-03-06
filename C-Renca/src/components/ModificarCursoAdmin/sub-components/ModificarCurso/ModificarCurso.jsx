import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ModificarCurso.css';
import { Link } from 'react-router-dom';



function ModificarCurso() {
  const [cursos, setCursos] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState(null);
  const [nombreCurso, setNombrecurso] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [mostrarModulos, setMostrarModulos] = useState(false); 
  const [modulos, setModulos] = useState('');

  useEffect(() => {
    // Obtener las cursos disponibles
    axios.get('http://localhost:4000/cursos')
      .then(response => setCursos(response.data))
      .catch(error => console.error('Hubo un error al obtener los cursos:', error));

    // Obtener los  modulos disponibles
    axios.get('http://localhost:4000/modulos')
      .then(response => setModulos(response.data))
      .catch(error => console.error('Hubo un error al obtener los modulos:', error));
  }, []);

  const handleSeleccionarCurso = (id) => {
    axios.get(`http://localhost:4000/cursos/${id}`)
      .then(response => {
        setCursoSeleccionado(response.data);
        console.log(response.data);
        setMostrarCursos(false); // Ocultar los cursos después de seleccionar una
      })
      .catch(error => console.error('Hubo un error al obtener la información del curso:', error));
  };

  
    // Función para verificar si un curso está asociado a la ruta seleccionada
    const moduloEnCurso = (moduloId) => {
      return cursoSeleccionado && cursoSeleccionado.modulos.some(modulo => modulo._id === moduloId);
  };

  // Función para asignar un curso a la ruta seleccionada
  const asignarModulo = (moduloId) => {
      if (!cursoSeleccionado) return;

      axios.put(`http://localhost:4000/asignar-modulo/${cursoSeleccionado._id}`, {
          modulos: [moduloId]
      })
      .then(response => {
          console.log(response.data);
          // Actualizar la información de la ruta seleccionada con el curso asignado
          setCursoSeleccionado(response.data);
      })
      .catch(error => console.error('Hubo un error al asignar el modulo al curso:', error));
  };

// Función para eliminar un curso de la ruta seleccionada
const EliminarModulo = (moduloId) => {
  if (!cursoSeleccionado) return;

  // Realiza la solicitud DELETE para eliminar el curso de la ruta
  axios.delete(`http://localhost:4000/quitar-modulo/${cursoSeleccionado._id}`, {
      data: { modulos: moduloId }
  })
  .then(response => {
      console.log(response.data);
      // Actualiza la información de la ruta seleccionada sin el curso eliminado
      setCursoSeleccionado(response.data);
  })
  .catch(error => console.error('Hubo un error al eliminar el curso de la ruta:', error));
};


  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleGuardarCambios = () => {
    // Realizar una solicitud PUT para actualizar la ruta seleccionada con los nuevos valores
    axios.put(`http://localhost:4000/cursos/${cursoSeleccionado._id}`, {
      nombreCurso: nombreCurso,
      descripcion: descripcion
    })
    .then(response => {
      console.log(response.data);
      // Actualizar la información de la ruta seleccionada con los nuevos valores
      setCursoSeleccionado(response.data);
      window.location.reload();
    })
    .catch(error => console.error('Hubo un error al actualizar la ruta:', error));
  };

  return (
    <div className="mc-container">
      <h2 className='tituloFormularioSubida'>Modificar Cursos</h2>
      <form className='contenedorFormulario' onSubmit={handleSubmit}>
        <div className='descripcionFormulario'>
          <div className='textoFormulario'>
          <div >
              <select onChange={(e) => handleSeleccionarCurso(e.target.value)}>
                <option value="">Selecciona un Curso</option>
                {cursos.map(curso => (
                  <option key={curso._id} value={curso._id}>{curso.nombreRuta}</option>
                ))}
              </select>
            </div>
            <h2>Modificar Curso: {cursoSeleccionado ? cursoSeleccionado.nombreCurso : ''}</h2>
            <input
              placeholder='Nombre Curso'
              type="text"
              value={cursoSeleccionado ? cursoSeleccionado.nombreCurso : ''}
              onChange={(e) => setNombrecurso(e.target.value)}
              className="input"
            />
            <input
              placeholder='Descripcion Curso'
              type="text"
              value={cursoSeleccionado ? cursoSeleccionado.descripcion : ''}
              onChange={(e) => setDescripcion(e.target.value)}
              className="input"
            />
{/* 
            <div className='modulosDisponibles'>
              <h2>Modulos Disponibles</h2>
              <div className="cardsContainer">
                {modulos.map(modulo => (
                  <div key={modulo._id} className="card">
                    <h3>{modulo.nombreModulo}</h3>
                    <p>{modulo.descripcion}</p>
                    <div className="buttonContainer">
                      {!moduloEnCurso(modulo._id) ? (
                        <button onClick={() => asignarModulo(modulo._id)}>Asignar modulo</button>
                      ) : (
                        <button onClick={() => EliminarModulo(modulo._id)}>Eliminar Modulo</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div> */}


          </div>
        </div>
        <div className='PrevisualizacionFormulario'>
          <h3>{cursoSeleccionado ? cursoSeleccionado.nombreCurso : ''}</h3>
          <button type="submit" className='buttonSubir' onClick={handleGuardarCambios}><span>Guardar Cambios</span></button>
          <button className='buttonEliminar'>Eliminar Curso</button>
        </div>
      </form>
      <Link to="/catalogo-cursos"><button className='btn btn-primary'>Volver</button></Link>
    </div>
  );
}

export default ModificarCurso;
