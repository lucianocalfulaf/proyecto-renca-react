import React, { useState } from 'react';
import './Formulario.css';

function Formulario({ onChange }) {
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  const [selectedOption, setSelectedOption] = useState(null);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Llamar a la función de devolución de llamada para enviar el cambio al componente padre
    onChange({ categoria: option });
  };

  const opcionesDropdown = ['Categoría 1', 'Categoría 2', 'Categoría 3'];

  return (
    <div className="form-group">
      <label htmlFor="nombreCurso" className="label">Nombre:</label>
      <input
        type="text"
        id="nombreCurso"
        name="nombreCurso"
        onChange={handleChange}
        className="form-control" 
      />
      <label htmlFor="descripcion" className="label">Descripción:</label>
      <input
        type="text"
        name="descripcion"
        onChange={handleChange}
        className="form-control" 
      />
      <div className="dropdown-categoria">
        <button onClick={toggleDropdown} className="dropdown-button-categoria">
          {selectedOption ? selectedOption : 'Seleccione categoría'}
        </button>
        {isOpen && (
          <div className="dropdown-menu-categoria">
            {opcionesDropdown.map((option, index) => (
              <div key={index} className="dropdown-item-categoria" onClick={() => handleOptionClick(option)}>
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
      <label htmlFor="profesor" className="label">Profesor:</label>
      <input
        type="text"
        name="profesor"
        onChange={handleChange}
        className="form-control" 
      />
      <label htmlFor="duracion" className="label">Duración:</label>
      <input
        type="number"
        name="duracion"
        onChange={handleChange}
        className="form-control" 
      />
      
    </div>
  );
}

export default Formulario;

