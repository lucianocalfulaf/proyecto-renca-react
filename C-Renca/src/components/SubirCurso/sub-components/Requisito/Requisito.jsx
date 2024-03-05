import React, { useState } from 'react';
import './Requisito.css';

function Requisito ({ onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    // Llamar a la función de devolución de llamada para enviar el cambio al componente padre
    onChange({ requisito: option });
  };

  const opcionesRequisito = ['Ninguno', 'Enseñanza básica', 'Enseñanza media'];

  return(
    <div className="dropdown-requisito">
      <button onClick={toggleDropdown} className="dropdown-button-requisito">
        {selectedOption ? selectedOption : 'Seleccione requisito'}
      </button>
      {isOpen && (
        <div className="dropdown-menu-requisito">
          {opcionesRequisito.map((option, index) => (
            <div key={index} className="dropdown-item-requisito" onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Requisito;
