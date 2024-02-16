import React from 'react';

function LoginForm() {
  const login = () => {
    // Simulación de inicio de sesión exitoso
    alert('Inicio de sesión exitoso');
  };

  const forgotPassword = () => {
    // Simulación de restablecimiento de contraseña
    alert('Se ha enviado un correo electrónico para restablecer su contraseña');
  };

  const register = () => {
    // Simulación de redirección a la página de registro
    alert('Redirigiendo a la página de registro');
  };

  const adminLogin = () => {
    // Simulación de redirección a la página de inicio de sesión de administrador
    alert('Redirigiendo a la página de inicio de sesión de administrador');
  };

  return (
    <div className="container-fluid">
      <form className="formulario">
        <h3 className="titulo">Iniciar Sesión</h3>
        <br />
        <img src="public\Logo C-Renca.png" alt="Iniciar Sesion Imagen" className="logo" />
        <br />
        <table>
          <tbody>
            <tr>
              <td>
                <input className="form" placeholder="Nombre usuario:" type="text" id="name" name="name" required />
              </td>
            </tr>
            <tr>
              <td>
                <input className="form" placeholder="Contraseña:" type="password" id="password" name="password" required />
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <button type="button" className="botonRegister" onClick={login}>Iniciar Sesión</button>
        <br />
        <div className="mt-3 text-center">
          <a href="#" onClick={forgotPassword}>¿Olvidó su contraseña?</a>
        </div>
        <div className="mt-2 text-center">
          <a href="#" onClick={register}>¿No está registrado? Regístrese</a>
        </div>
        <div className="mt-2 text-center">
          <a href="#" onClick={adminLogin}>¿Es administrador? Ingresar perfil administrador</a>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
