import React from 'react';

function FormularioInicioSesion() {
    
  //Local Storage para el Admin    
    const adminLogin = (email, contraseña) => {
      // Aquí deberías verificar las credenciales de administrador en el servidor
      if (email === 'admin' && contraseña === 'admincontraseña') {
        // Iniciar sesión de administrador 
        localStorage.setItem('adminID', email); // Almacena el email de administrador como ID de administrador
        alert('Inicio de sesión de administrador exitoso');
  
        // Hay que definir cuál será la página principal del Admin
        window.location.href = '/';
      } else {
        alert('Credenciales de administrador incorrectas');
      }
    }; 

    const loginAdmin = () => {
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      adminLogin(email, password);
  };

  const forgotPassword = () => {
      // Aquí debes implementar la lógica para manejar el caso de olvido de contraseña
      alert('Implementa la lógica para recuperar la contraseña');
  };

    
    
    return (
      <div className="formulario-is">
        <h3 className="titulo-is">Iniciar Sesión</h3>
        <br />
        <img src="/Logo C-Renca.png" alt="Iniciar Sesion Imagen" className="logo-is" />
        <br />
        <form className="datos">
          <input
            className="form"
            placeholder="Correo Electrónico:"
            type="email"
            id="email"
            name="email"
            required
          />
          <br />
          <input
            className="form"
            placeholder="Contraseña:"
            type="password"
            id="password"
            name="password"
            required
          />
          <br />
          <button type="btn" className="botonRegister-is" onClick={() => loginAdmin()}>
            Iniciar Sesión
          </button>
          <br />
          <div className="mt-3 text-center">
            <a href="#" onClick={() => forgotPassword()}>
              ¿Olvidó su contraseña?
            </a>
          </div>
        </form>
      </div>
    );
  }
  
  export default FormularioInicioSesion;