import { Link } from 'react-router-dom';

function LeftSide() {
    return (
      <div className="left-side">
        <form className="ls-form">
          <br />
          <Link to="/"><img src="/logo-renca.png" alt="admin" className="imagen1" title="volver al inicio"/></Link>
          <br />
          <h3 className="titulo-login-admin">Administrador</h3>
          <br />
          <img
            src="/personas.png" alt="admin" className="imagen2"/>
          <br />
        </form>
      </div>
    );
  }
  
  export default LeftSide;