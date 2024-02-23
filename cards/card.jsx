// CourseCard.jsx
import React, { useState } from 'react';
import './card.css';

function CourseCard({ onContinue }) {
  const [progress, setProgress] = useState(0);

  const handleContinue = () => {
    // Aquí podrías realizar alguna lógica adicional antes de continuar
    onContinue();
  };

  return (
    <div className="card-container">
      <div className="card card-with-image">
        <div className="card-image-container">
          <img src="https://www.amadeusescuelademusica.es/wp-content/uploads/2019/03/El-piano-648x365.jpg" alt="Card 1 Image" />
        </div>
        <div className="card-content">
          <h2>Curso B</h2>
          <p>RUTA QUE ESTA HACIENDO</p>
          <p>Profesor</p>
          <p>Tiempo</p>
          <p>Avance</p>
          <div className="progress">
            <div className="progress__fill" style={{ width: `${progress}%` }}></div>
            <span className="progress__text">{progress}/7</span>
          </div>
          <button id="continue-course-btn" onClick={handleContinue}>Continuar curso</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
