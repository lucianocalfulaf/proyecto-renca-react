import './Acordeon.css';
import { useState } from 'react';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

function Acordeon() {
  const [{theme, mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="column-4">
      <div className="accordion">
        <div className="accordion-item">
          <h5 className="accordion-header" 
            onClick={() => toggleItem(1)}
            style={{backgroundColor: isDark ? theme.backgroundColor : '#f0f0f0', color: isDark ? theme.color : 'black'}}
          >
            Módulo 1
          </h5>
          <div className={`accordion-panel ${activeIndex === 1 ? 'active' : ''}`} >
            <div className="accordion-body" style={{backgroundColor: isDark ? mainTheme.backgroundColor : 'rgba(250, 250, 250, 0.84)'}}>
              <p style={{color: isDark ? mainTheme.color : 'black'}}>Descripción del contenido del primer módulo.</p> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header"
            onClick={() => toggleItem(2)}
            style={{backgroundColor: isDark ? theme.backgroundColor : '#f0f0f0', color: isDark ? theme.color : 'black'}}
          >
          Módulo 2
          </h5>
          <div className={`accordion-panel ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="accordion-body" style={{backgroundColor: isDark ? mainTheme.backgroundColor : 'rgba(250, 250, 250, 0.84)'}}>
            <p style={{color: isDark ? mainTheme.color : 'black'}}>Descripción del contenido del segundo módulo.</p> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h5 className="accordion-header"
            onClick={() => toggleItem(3)}
            style={{backgroundColor: isDark ? theme.backgroundColor : '#f0f0f0', color: isDark ? theme.color : 'black'}}
          >
          Módulo 3
          </h5>
          <div className={`accordion-panel ${activeIndex === 3 ? 'active' : ''}`}>
            <div className="accordion-body" style={{backgroundColor: isDark ? mainTheme.backgroundColor : 'rgba(250, 250, 250, 0.84)'}}>
            <p style={{color: isDark ? mainTheme.color : 'black'}}>Descripción del contenido del tercer módulo.</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acordeon;