import './LoginUsuario.css';
import { Link } from 'react-router-dom';
// import { useState, useEffect, useContext } from 'react';
import { useContext, useState } from 'react';
import { ThemeContextUser } from '../../context/ThemeContextUser';
import { Navigate } from 'react-router-dom';
import axios from 'axios';


//LocalStorage implementado, falta probar que funcione
//Como está enrutado, debería guardarse el login para todas las páginas
//Por seguridad del usuario, no se almacena la contraseña
//No debería afectar al JWT 
function LoginForm() {
  const [{loginTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode
 
    const forgotPassword = () => {
      // Simulación de restablecimiento de contraseña
      alert('Se ha enviado un correo electrónico para restablecer su contraseña');
    };

    const register = () => {
      // Simulación de redirección a la página de registro
      alert('Redirigiendo a la página de registro');
    };
  

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
  
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [redirect, setRedirect] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:4000/login", { correo, contrasena });
            // Guardar el token de sesión en localStorage si el inicio de sesión es exitoso
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('usuario', JSON.stringify(response.data.data));
            console.log("token: ",response.data.token);
            console.log("Sesión iniciada: ", response.data);
            console.log("datos usuario: ",response.data.data);
            console.log("id usuario: ",response.data.data.id);
            // Establecer la variable de estado redirect en true para activar la redirección
            setRedirect(true);
        } catch (error) {
            console.error("Error al iniciar sesión: ", error);
            // Aquí puedes manejar el error, como mostrar un mensaje de error al usuario
        }
    }
    // Redirige al usuario a la página de perfil después de iniciar sesión correctamente
    if (redirect) {
        return <Navigate to="/perfil-usuario" />;
    }


    return (
      <div className="login-bg">
        <div className="container-fluid-2">
            <form className="formulario-2" style={{backgroundColor: loginTheme.backgroundColor, color: loginTheme.color }}>
            <h3 className="titulo-login">Iniciar Sesión</h3>
            <br />
            <Link className="link" to="/" title="Home"><img src="\Logo C-Renca.png" alt="Iniciar Sesion Imagen" className="logo-2" /></Link>
            <br />
            <table>
                <tbody>
                <tr>
                    <td>
                    <input className="form-2" placeholder="Correo:" type="text" id="email" name="email"  autoComplete="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input className="form-2" placeholder="Contraseña:" type="password" id="password" name="password" autoComplete="current-password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} required />
                    </td>
                </tr>
                </tbody>
            </table>
    
            <br />
            <button type="button" className="botonRegister-2" onClick={handleSubmit}>Iniciar Sesión</button>
            <br />
            <div className="mt-3 text-center">
                <a href="#" onClick={forgotPassword}>¿Olvidó su contraseña?</a>
            </div>
            <div className="mt-2 text-center">
                <a href="#" onClick={register}>¿No está registrado? Regístrese</a>
            </div>
            <div className="mt-2 text-center">
                <Link to="/login-admin"><a href="#">¿Es administrador? Ingresar perfil administrador</a></Link>
            </div>
            </form>
        </div>
      </div>
    );
} 

export default LoginForm;