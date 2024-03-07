import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

function FormularioInicioSesion() {

  const forgotPassword = () => {
      // Aquí debes implementar la lógica para manejar el caso de olvido de contraseña
      alert('Implementa la lógica para recuperar la contraseña');
  };

    
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [redirect, setRedirect] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/login-admin", { correo, contrasena });
            // Guardar el token de sesión en localStorage si el inicio de sesión es exitoso
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.data));
            console.log("token: ",response.data.token);
            console.log("Sesión iniciada: ", response.data);
            console.log("datos usuario: ",response.data.data);
            console.log("id usuario: ",response.data.data.id);
            alert('Inicio de Sesión exitoso!');
            // Establecer la variable de estado redirect en true para activar la redirección
            setRedirect(true);
        } catch (error) {
          alert('Inicio de sesión incorrecto \nRevisa si ingresaste bien los datos!');
            console.error("Error al iniciar sesión: ", error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
    }
    // Redirige al usuario a la página de perfil después de iniciar sesión correctamente
    if (redirect) {
        return <Navigate to="/home-admin" />;
    }
    
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
            value={correo} 
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <br />
          <input
            className="form"
            placeholder="Contraseña:"
            type="password"
            id="password"
            name="password"
            value={contrasena} 
            onChange={(e) => setContrasena(e.target.value)} 
            required
          />
          <br />
          <button type="btn" className="botonRegister-is" onClick={handleSubmit}>
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