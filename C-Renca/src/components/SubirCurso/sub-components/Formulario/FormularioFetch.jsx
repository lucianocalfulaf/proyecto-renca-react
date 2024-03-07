import { useState } from 'react';
import axios from 'axios';
import './FormularioFetch.css'; 

function Formulario() {
  const [nombreCurso, setNombreCurso] = useState('');
  const [filtro, setFiltro] = useState('');
  const [categoria, setCategoria] = useState('');
  const [profesor, setProfesor] = useState('');
  const [duracion, setDuracion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [contenidos, setContenidos] = useState('');
  const [imagen, setImagen] = useState(null); // Estado para almacenar la imagen seleccionada
  const [enviadoExitosamente, setEnviadoExitosamente] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifica si hay una imagen seleccionada
    if (!imagen) {
      console.error('Debe seleccionar una imagen');
      return;
    }

    // Crear un objeto FormData para enviar la imagen y los datos del curso
    const formData = new FormData();
    formData.append('imagen', imagen);
    formData.append('nombreCurso', nombreCurso);
    formData.append('filtro', filtro);
    formData.append('categoria', categoria);
    formData.append('profesor', profesor);
    formData.append('duracion', duracion);
    formData.append('descripcion', descripcion);
    formData.append('requisitos', requisitos);
    formData.append('contenidos', contenidos);

    // Realiza la solicitud POST para cargar la imagen y crear el curso
    try {
      const response = await axios.post("http://localhost:4000/cursos", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log('Curso creado:', response.data);

      // Limpiar los campos del formulario después de enviar el curso
      setNombreCurso('');
      setFiltro('');
      setCategoria('');
      setProfesor('');
      setDuracion('');
      setDescripcion('');
      setRequisitos('');
      setContenidos('');
      setImagen(null); // Reinicia el estado de la imagen
      setEnviadoExitosamente(true);
    } catch (error) {
      console.error('Hubo un problema al enviar el curso:', error);
    }
  };

  // Función para manejar la selección de la imagen
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setImagen(imageFile);
  };

  return (
    <div className="container-fluid">
      <form className="form-container-A" onSubmit={handleSubmit}>
        <div className="form-group-1">
          <label className="label">
            Nombre del Curso:
            <input type="text" className='input' value={nombreCurso} onChange={(e) => setNombreCurso(e.target.value)} />
          </label>
          <label className="label">
            Filtro :
            <input type="text" className='input' placeholder="Dentro de qué categoría de cursos será parte" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
          </label>
          <label>
            Profesor:
            <input type="text" className='input' value={profesor} onChange={(e) => setProfesor(e.target.value)} />
          </label>
          <label>
            Duración :
            <input type="number" className='input' placeholder="Horas" value={duracion} onChange={(e) => setDuracion(e.target.value)} />
          </label>
        </div>
        <div className="form-group-2">
          <label htmlFor="descripcion" className="label">Descripción :</label>
          <input
            type="text"
            id="descripcion"
            placeholder="Breve descripción del curso en general"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group-3">
          <label htmlFor="requisitos" className="label">Requisitos :</label>
          <input
            type="text"
            id="requisitos"
            placeholder="Para realizar el curso el alumno debe cumplir con estos requisitos"
            value={requisitos}
            onChange={(e) => setRequisitos(e.target.value)}
            className="input"
          />
        </div>
        <div className="form-group-4">
        {/*}  <label htmlFor="contenidos" className="label">Contenidos :</label>
          <textarea
            id="contenidos"
            placeholder="No encuentro necesario este campo, es como la descripción"
            value={contenidos}
            onChange={(e) => setContenidos(e.target.value)}
            className="textarea"
  />*/}
        </div>
        <div className="form-group-5">
          <i className="fa fa-cloud-upload custom-icon"></i>
          <label htmlFor="imagen" className="label">Imagen del curso:</label>
          <input
            type="file"
            id="imagen"
            accept="image/*" // Solo permite cargar archivos de imagen
            onChange={handleImageChange}
            className="input"
          />
        </div>
        <button type="submit" id="botonForm">Enviar</button>
        {enviadoExitosamente && <p className="aviso">¡Curso creado con éxito!</p>}
      </form>
    </div>
  );
}

export default Formulario;
