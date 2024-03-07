import './BotonContinuar.css';
import { useState } from 'react';

function BotonContinuar({ updateCounter }) {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    // Update the counter by 1 when the "Continuar Curso" button is clicked
    setCounter(prevCounter => Math.min(prevCounter + 1, 3)); // Limit counter to 3

    // Optionally, call the updateCounter function received as a prop if needed
    if (updateCounter) {
      updateCounter(Math.min(counter + 1, 3)); // Pass the limited counter value
    }

    if (counter === 3) {
      // Show popup if counter reaches 3
      alert('¡Completado!');
    }
  };

  return (
    <div className="column-6">
      <div className="content-container-6">
        <h2>Avance</h2>
        <h1>{counter}/3</h1>
        <button onClick={handleClick}>Continuar Curso</button>
      </div>
    </div>
  );
}

export default BotonContinuar;
