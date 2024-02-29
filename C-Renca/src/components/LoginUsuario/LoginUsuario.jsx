import './LoginUsuario.css';
import { Link } from 'react-router-dom';

//LocalStorage implementado, falta probar que funcione
//Como está enrutado, debería guardarse el login para todas las páginas
//Por seguridad del usuario, no se almacena la contraseña
//No debería afectar al JWT 
function LoginForm() {
  const login = () => {
    const name = document.getElementById('email').value;
    const contraseña = document.getElementById('password').value;
      
    // Aquí deberías verificar las credenciales en el servidor
    if (name === 'name' && contraseña === 'contraseña') {
      // Iniciar sesión y almacenar el ID del usuario en el almacenamiento local
      localStorage.setItem('userID', name); // Almacena el email como ID del usuario
      alert('Inicio de sesión exitoso');

      // Redireccionar a la página principal de usuario, a definir
      window.location.href = '/CatalogoCursos';
    } else {
      alert('Credenciales incorrectas');
    }
  }; 



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
  
    return (
      <div className="login-bg">
        <div className="container-fluid-2">
            <form className="formulario-2">
            <h3 className="titulo-login">Iniciar Sesión</h3>
            <br />
            <Link className="link" to="/" title="Home"><img src="\Logo C-Renca.png" alt="Iniciar Sesion Imagen" className="logo-2" /></Link>
            <br />
            <table>
                <tbody>
                <tr>
                    <td>
                    <input className="form-2" placeholder="Nombre usuario:" type="text" id="name" name="name" required />
                    </td>
                </tr>
                <tr>
                    <td>
                    <input className="form-2" placeholder="Contraseña:" type="password" id="password" name="password" required />
                    </td>
                </tr>
                </tbody>
            </table>
    
            <br />
            <button type="button" className="botonRegister-2" onClick={login}>Iniciar Sesión</button>
            <br />
            <div className="mt-3 text-center">
                <a href="#" onClick={forgotPassword}>¿Olvidó su contraseña?</a>
            </div>
            <div className="mt-2 text-center">
                <a href="#" onClick={register}>¿No está registrado? Regístrese</a>
            </div>
            <div className="mt-2 text-center">
                <Link to="/login-admin"><a href="#" onClick={adminLogin}>¿Es administrador? Ingresar perfil administrador</a></Link>
            </div>
            </form>
        </div>
      </div>
    );
  }
  
  export default LoginForm;