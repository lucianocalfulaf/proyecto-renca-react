import './Filtro.css';
import { useState } from 'react';

function FilterButton({ onFilterChange }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (filter) => {
    onFilterChange(filter);
    toggleMenu();
  };

  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        onClick={toggleMenu}
      >
        Filter
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => handleFilterChange('duration')}>Duration</button></li>
          <li><button className="dropdown-item" onClick={() => handleFilterChange('category')}>Category</button></li>
        </ul>
      )}
    </div>
  );
}

export default FilterButton;