import './Profile.scss';
import React from 'react'; // Import React for state management
import { useEffect, useState  } from 'react';

const Profile = () => {
  const [isEditing, setIsEditing] = React.useState(false); // State to track edit mode
  const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        // Obtener el ID del usuario almacenado en el localStorage
        const storedUserID = localStorage.getItem('userID');

        // Si hay un ID de usuario almacenado, busca el usuario correspondiente
        if (storedUserID) {
            const getUser = async () => {
                const res = await fetch('http://localhost:4000/usuarios');
                const data = await res.json();
                const foundUser = data.find(user => user.correo === storedUserID);
                if (foundUser) {
                    setLoggedUser(foundUser);
                }
            };

            getUser();
        }
    }, []);

  const handleEditClick = () => {
    setIsEditing(true); // Open lightbox on click
  };

  const handleCloseLightbox = () => {
    setIsEditing(false); // Close lightbox
  };

  // Lightbox content (replace with your actual form elements)
  const lightboxContent = (
    <div className="lightbox">
      <h2>Modify User Data</h2>
      <form>
        {/* Form fields for user data */}
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">Correo Electronico:</label>
        <input type="email" id="email" name="email" />
        {/* Add more form fields as needed */}
        <button type="submit">Save Changes</button>
      </form>
      <button className="close-lightbox" onClick={handleCloseLightbox}>
        Close
      </button>
    </div>
  );

  return (
    <div className="card-container">
      {isEditing && lightboxContent} {/* Render lightbox conditionally */}
      {loggedUser && (
                <div key={loggedUser.email} className="card card-with-image">
                    <div className="card-image-container">
                        <img src="/testUser2.png" alt="Card 1 Image" />
                    </div>
                    <div className="card-content">
                        <h2>{loggedUser.nombre} {loggedUser.apellido}</h2>
                        <div className="progress">
                            <div className="progress__fill"></div>
                            <span className="progress__text">0%</span>
                        </div>
                        <a>{loggedUser.correo}</a><br />
                        <a>{loggedUser.direccion}</a><br />
                        <button className="modificar-datos" onClick={handleEditClick}>Modificar Datos</button>
                    </div>
                </div>
            )}
      <div className="card2 card-with-image2">
        <div className="card-image-container2">
          <i className="fa-solid fa-book-bookmark" id="card-icon"></i>
        </div>
        <div className="card-content2">
          <h2>
            <strong>CURSOS<br />INSCRITOS</strong>
          </h2>
          <br />
          <p>Curso A</p>
          <div className="progress2">
            <div className="progress__fill2"></div>
            <span className="progress__text2">0%</span>
          </div>
        </div>
      </div>
      <div className="card3 card-with-image3">
        <div className="card-image-container3">
          <i className="fa-solid fa-circle-check"></i>
        </div>
        <div className="card-content3">
          <h2>
            <strong>CURSOS<br />APROBADOS</strong>
          </h2>
          <br />
          <p>Curso A</p>
        </div>
      </div>
      <div className="card4 card-with-image4">
        <div className="card-image-container4">
          <i className="fa-solid fa-certificate"></i>
        </div>
        <div className="card-content4">
          <h2>
            <strong>CERTIFICADOS<br />OBTENIDOS</strong>
          </h2>
          <br />
          <p>Ciberseguridad</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
