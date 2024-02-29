import './CrearCategoria.css';
import { useState, useRef } from 'react';

function CrearCategoria() {
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
    <div className='categoria-container'>
      <h2 className='tituloFormSubida'>Crear Categoría</h2>
      <form className='contenedorForm'>
        <div className='descripcionForm'>
          <div className='textoForm'>
            <input
              placeholder='Nombre Categoría'
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="inputForm"

            />
          </div>
          <div className='textoForm'>
              <input
                placeholder='Descripción'
                type="text"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
                className="inputForm"
              />
          </div>
          <div className="descripcionForm">
            <table className='tablaForm'>
              <tr>
                <td>
                  <button onClick={handleFileCurso} className='buttonForm' >Seleccionar Archivo</button>
                  <input type="file" ref={fileInputCurso} style={{ display: 'none' }} onChange={handleFileSelectedCurso} />
                </td>
                <td><p className='labelForm'>Cursos Agregados</p></td>
              </tr>
              <tr>
              <td>
                <select onChange={handleColorChange} className='selectButtonForm'>
                  <option value="">Selecciona un Color</option>
                  <option value="Rojo">Rojo</option>
                  <option value="Azul">Azul</option>
                  <option value="Verde">Verde</option>
                  <option value="Amarillo">Amarillo</option>
                </select>
              </td>
              <td><p className='labelForm'>{selectedColor ? `Color seleccionado: ${selectedColor}` : 'Seleccione un color'}</p></td>
              </tr>
              <tr>
                <td>
                  <button onClick={handleFileCertificado} className='buttonForm' >Seleccionar Archivo</button>
                  <input type="file" ref={fileInputCertificado} style={{ display: 'none' }} onChange={handleFileSelectedCertificado} />
                </td>
                <td><p className='labelForm'>Cargar Certificado</p></td>
              </tr>
            </table>
          </div>
        </div>
        <div className='PrevisualizacionForm'>
          <h2 className='tituloFormSubida2'>Cursos en la Categoría</h2>
          <div className='contenedorImg'>
            <img />
          </div>
          <h3>(Nombre Curso)</h3>
          <button onClick={handleSubmit} className='buttonUp'> <span>Subir Categoría</span></button>

          
        </div>

      </form>
    </div>
  );
}

export default CrearCategoria;