import { useState } from 'react';
import './Formulario.css'; // Importa el archivo CSS
import axios from 'axios';

function Formulario() {
  const [nombreCurso, setNombreCurso] = useState('');
  const [categoria, setCategoria] = useState('');
  const [profesor, setProfesor] = useState('');
  const [duracion, setDuracion] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [contenidos, setContenidos] = useState('');
  const [imagen, setImagen] = useState(null); // Estado para almacenar la imagen seleccionada

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Crear un objeto FormData para enviar la imagen
    const formData = new FormData();
    formData.append('imagen', imagen);

    // Realiza la solicitud POST para cargar la imagen
    try {
      const response = await axios.post("http://localhost:4000/upload", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      const imagenUrl = response.data.url; // URL de la imagen cargada

      // Datos del curso junto con la URL de la imagen
      const cursoData = {
        nombreCurso: nombreCurso,
        categoria: categoria,
        profesor: profesor,
        duracion: duracion,
        descripcion: descripcion,
        requisitos: requisitos,
        contenidos: contenidos,
        imagen: imagenUrl // Agrega la URL de la imagen al objeto de datos del curso
      };

      // Realiza la solicitud POST para crear el curso
      const cursoResponse = await axios.post("http://localhost:4000/cursos", cursoData);
      console.log('Curso creado:', cursoResponse.data);

      // Limpiar los campos del formulario después de enviar el curso
      setNombreCurso('');
      setCategoria('');
      setProfesor('');
      setDuracion('');
      setDescripcion('');
      setRequisitos('');
      setContenidos('');
      setImagen(null); // Reinicia el estado de la imagen
      setSelectedOption(null); // Reinicia el estado de la opción seleccionada del dropdown
    } catch (error) {
      console.error('Hubo un problema al enviar el curso:', error);
    }
  };

  const opcionesDropdown = ['Opción 1', 'Opción 2', 'Opción 3'];

  // Función para manejar la selección de la imagen
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setImagen(imageFile);
  };

  return (
    <div className="container-fluid">
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <div className='row'>

        </div>
        <label className="label">
          Nombre del Curso:
          <input type="text" className='input' value={nombreCurso} onChange={(e) => setNombreCurso(e.target.value)} />
        </label>
        <label>
          Categoría:
          <input type="text" className='input' value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        </label>
        <label>
          Profesor:
          <input type="text" className='input' value={profesor} onChange={(e) => setProfesor(e.target.value)} />
        </label>
        <label>
          Duración:
          <input type="text" className='input' value={duracion} onChange={(e) => setDuracion(e.target.value)} />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="descripcion" className="label">Descripción:</label>
        <input
          type="text"
          id="descripcion"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="input"
        />
      </div>
      <div className="form-group">
        <label htmlFor="requisitos" className="label">Requisitos:</label>
        <input
          type="text"
          id="requisitos"
          value={requisitos}
          onChange={(e) => setRequisitos(e.target.value)}
          className="input"
        />
      </div>
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropdown-button">
          {selectedOption ? selectedOption : 'Seleccione categoría'}
        </button>
        {isOpen && (
          <div className="dropdown-menu">
            {opcionesDropdown.map((option, index) => (
              <div key={index} className="dropdown-item" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="contenidos" className="label">Contenido del curso:</label>
        <textarea
          id="contenidos"
          value={contenidos}
          onChange={(e) => setContenidos(e.target.value)}
          className="textarea"
        />
      </div>
      <div className="form-group">
        <label htmlFor="imagen" className="label">Imagen del curso:</label>
        <input
          type="file"
          id="imagen"
          accept="image/*" // Solo permite cargar archivos de imagen
          onChange={handleImageChange}
          className="input"
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
}

export default Formulario;
