import React, { useState } from 'react';
import './Acordeon.css';

function Acordeon() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="column-4">
      <div className="accordion">
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => toggleItem(1)}>
            Módulo 1
          </h5>
          <div className={`accordion-panel ${activeIndex === 1 ? 'active' : ''}`}>
            <div className="accordion-body">
              <p>Descripción del contenido del primer módulo.</p> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => toggleItem(2)}>
          Módulo 2
          </h5>
          <div className={`accordion-panel ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="accordion-body">
            <p>Descripción del contenido del segundo módulo.</p> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header" onClick={() => toggleItem(3)}>
          Módulo 3
          </h5>
          <div className={`accordion-panel ${activeIndex === 3 ? 'active' : ''}`}>
            <div className="accordion-body">
            <p>Descripción del contenido del tercer módulo.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acordeon;
