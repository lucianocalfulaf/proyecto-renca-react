import React, { useState, useEffect } from 'react';
import './Modulo.css';

//Es una página pop up
function AgregarModulo() {
    const [popupOpened, setPopupOpened] = useState(false);

    //Guarda la info de cada modulo
    const [formData, setFormData] = useState({
      nombreModulo: '',
      desModulo: ''
    });
    //Guarda modulos adicionales, se les ordena por número
    const [modulosAdicionales, setModulosAdicionales] = useState([]);
    const [modulosDropDown, setModulosDropDown] = useState([]);
    const [mostrarModulos, setMostrarModulos] = useState(false);
  
    useEffect(() => {
      // Concatenar los módulos adicionales con el módulo principal para el dropdown
      const modulos = [formData, ...modulosAdicionales];
      setModulosDropDown(modulos);
      // Mostrar el título "Módulos agregados" si hay al menos un módulo
      setMostrarModulos(modulos.length > 1);
    }, [formData, modulosAdicionales]);
  
    const openPopup = () => {
      setPopupOpened(true);
    };
  
    const closePopup = () => {
      setPopupOpened(false);
    };
  
    //Creo que es para mantener sincronizado los datos del formulario con los cambios
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Aquí puedes realizar acciones con los datos del formulario principal, como enviarlos a un servidor, etc.
      console.log('Formulario principal enviado:', formData);
      // Limpiar el formulario principal después de enviarlo
      setFormData({
        nombreModulo: '',
        desModulo: ''
      });
      // Cerrar el popup después de enviar el formulario
      closePopup();
      alert('Módulo guardado con éxito'); // Agregar un mensaje de éxito al usuario
    };
  
    const handleAgregarModulo = () => {
      // Agregar un nuevo objeto de módulo a la lista de módulos adicionales
      setModulosAdicionales([...modulosAdicionales, { nombreModulo: '', desModulo: '' }]);
    };
  
    const handleModuloInputChange = (index, e) => {
      const { name, value } = e.target;
      // Actualizar el módulo correspondiente en la lista de módulos adicionales
      const nuevosModulos = [...modulosAdicionales];
      nuevosModulos[index][name] = value;
      setModulosAdicionales(nuevosModulos);
    };
  
    return (
      <div>
        <button onClick={openPopup}>Agregar módulo</button>
        {popupOpened && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={closePopup}>&times;</span>
              <h2>Módulos del curso</h2>
              <h4>Agrega cuantos necesites</h4>
{/*Modulo principal */}
              <form onSubmit={handleSubmit} id="moduloForm">
                <div className="casilla">
                  <label htmlFor="nombreModulo">Nombre módulo:</label>
                  <input type="text" id="nombreModulo" name="nombreModulo" value={formData.nombreModulo} onChange={handleInputChange} />
                  <br />
                  <label htmlFor="desModulo">Descripción:</label>
                  <input type="text" id="desModulo" name="desModulo" value={formData.desModulo} onChange={handleInputChange} />
                  <br />
{/*Agregar módulos adicionales */}
                  {modulosAdicionales.map((modulo, index) => (
                    <div key={index}>
                      <label htmlFor={`nombreModulo${index}`}>{`Módulo ${index + 2}: Nombre del módulo:`}</label>
                      <input type="text" id={`nombreModulo${index}`} name={`nombreModulo${index}`} value={modulo.nombreModulo} onChange={(e) => handleModuloInputChange(index, e)} />
                      <br />
                      <label htmlFor={`desModulo${index}`}>Descripción:</label>
                      <input type="text" id={`desModulo${index}`} name={`desModulo${index}`} value={modulo.desModulo} onChange={(e) => handleModuloInputChange(index, e)} />
                      <br />
                    </div>
                  ))}
                  <button type="button" onClick={handleAgregarModulo}>Agregar más módulos</button>
{/*Enviar la info */}
                  <button type="submit">Enviar</button>
                </div>
              </form>
            </div>
          </div>
        )}
{/*Mostrar la info en la página, fuera del pop up */}
        {mostrarModulos && (
          <div>
            <h2>Módulos agregados</h2>
            <select>
              {modulosDropDown.map((modulo, index) => (
                <option key={index}>{`${index + 1}: ${modulo.nombreModulo}`}</option>
              ))}
            </select>
          </div>
        )}
      </div>
    );
  }
  
  export default AgregarModulo;
  