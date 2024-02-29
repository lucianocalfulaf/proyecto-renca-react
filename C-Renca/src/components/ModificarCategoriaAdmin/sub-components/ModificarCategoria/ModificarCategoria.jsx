import { useState, useRef } from 'react';
import './ModificarCategoria.css';

function Modificar() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [requisitos, setRequisitos] = useState('');
  const [contenidos, setContenidos] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Titulo:', titulo);
    console.log('Descripcion:', descripcion);
    console.log('Requisitos:', requisitos);
    console.log('Contenidos:', contenidos);
  };

  const fileInputCurso = useRef(null);
  const fileInputCertificado = useRef(null);

  const handleFileCurso = () => {
    fileInputCurso.current.click();
  };

  const handleFileCertificado = () => {
    fileInputCertificado.current.click();
  };

  const handleFileSelectedCurso = (event) => {
    const file = event.target.files[0];
    console.log('File selected:', file);
  };
  const handleFileSelectedCertificado = (event) => {
    const file = event.target.files[0];
    console.log('File selected:', file);
  };


  const [miniatura, setMiniatura] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMiniatura(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const [selectedColor, setSelectedColor] = useState('');

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div className="mc-container">
      <h2 className='tituloFormularioSubida'>Modificar Categoría</h2>
      <form className='contenedorFormulario'>
        <div className='descripcionFormulario'>
          <div className='textoFormulario'>
            <input
              placeholder='Nombre Categoría'
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="input"

            />
          </div>
          <div className='textoFormulario'>
              <input
                placeholder='Descripción'
                type="text"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="input"
              />
          </div>
          <div className="descripcionFormulario">
            <table className='tablaFormulario'>
              <tr>
                <td>
                  <button onClick={handleFileCurso} className='buttonFormulario' >Seleccionar Archivo</button>
                  <input type="file" ref={fileInputCurso} style={{ display: 'none' }} onChange={handleFileSelectedCurso} />
                </td>
                <td><p className='labelFormulario'>Curso X, Curso Y, Curso Z</p></td>
              </tr>
              <tr>
              <td>
                <select onChange={handleColorChange} className='selectButtonFormulario'>
                  <option value="">Selecciona un color</option>
                  <option value="Rojo">Rojo</option>
                  <option value="Azul">Azul</option>
                  <option value="Verde">Verde</option>
                  <option value="Amarillo">Amarillo</option>
                </select>
              </td>
              <td><p className='labelFormulario'>{selectedColor ? `Color seleccionado: ${selectedColor}` : 'Azul'}</p></td>
              </tr>
              <tr>
                <td>
                  <button onClick={handleFileCertificado} className='buttonForm' >Seleccionar Archivo</button>
                  <input type="file" ref={fileInputCertificado} style={{ display: 'none' }} onChange={handleFileSelectedCertificado} />
                </td>
                <td><p className='labelFormulario'>Certificado Final</p></td>
              </tr>
            </table>
          </div>
        </div>
        <div className='PrevisualizacionFormulario'>
            <h2 className='tituloFormularioSubida2'>Cursos en la Categoría</h2>
            <div className='contenedorImagen'>
                <img />
            </div>
            <h3>Curso X</h3>

            <button onClick={handleSubmit} className='buttonSubir'> <span>Guardar Cambios</span></button>
            <button className='buttonEliminar'> Eliminar Categoría</button>
        </div>

      </form>
    </div>
  );
}

export default Modificar;