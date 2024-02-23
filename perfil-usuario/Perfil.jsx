import React from 'react';
import './perfil.css';

function App() {
  return (
    <div className="card-container">
      <div className="card card-with-image">
          <div className="card-image-container">
              <img src="Ellipse6.png" alt="Card 1 Image" />
          </div>
          <div className="card-content">
              <h2>NOMBRE</h2>
              <p>RUTA QUE ESTA HACIENDO</p>
              <div className="progress">
                  <div className="progress__fill"></div>
                  <span className="progress__text">0%</span>
              </div>            
              <a>CORREO ELECTRONICO</a><br />
              <a>DIRECCION</a><br />
              <a>RED SOCIAL</a><br />
              <a>A</a>
          </div>
      </div>
      <div className="card2 card-with-image2">
          <div className="card-image-container2">
              <img src="img/🦆_icon_book_.png" alt="Card Image" />
          </div>
          <div className="card-content2">
              <h2><strong>CURSOS<br />INSCRITOS</strong></h2><br />
              <p>curso a</p>
              <div className="progress2">
                  <div className="progress__fill2"></div>
                  <span className="progress__text2">0%</span> 
              </div>
          </div>
      </div>
      <div className="card3 card-with-image3">
          <div className="card-image-container3">
              <img src="img/🦆_icon_circle_check_.png" alt="Card Image" />
          </div>
          <div className="card-content3">
              <h2><strong>CURSOS<br />APROBADOS</strong></h2><br />
              <p><strong>CURSO A</strong></p>
          </div>
      </div>   
      <div className="card4 card-with-image4">
          <div className="card-image-container4">
              <img src="img/Vector.png" alt="Card Image" />
          </div>
          <div className="card-content4">
              <h2><strong>CERTIFICADOS<br />OBTENIDOS</strong></h2><br />
              <p><strong>Ciberseguridad</strong></p>
          </div>
      </div>    
    </div>
  );
}

export default App;
