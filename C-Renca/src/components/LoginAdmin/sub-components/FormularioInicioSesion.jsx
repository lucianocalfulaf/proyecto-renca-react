function FormularioInicioSesion() {
    return (
      <div className="formulario-is">
        <h3 className="titulo-is">Iniciar Sesión</h3>
        <br />
        <img src="/public/Logo C-Renca.png" alt="Iniciar Sesion Imagen" className="logo-is" />
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
          <button type="btn" className="botonRegister-is" onClick={() => login()}>
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