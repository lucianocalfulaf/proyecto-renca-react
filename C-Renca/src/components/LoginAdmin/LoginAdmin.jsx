import './LoginAdmin.css';
import LeftSide from './sub-components/LeftSide';
import FormularioInicioSesion from './sub-components/FormularioInicioSesion'

function LoginAdmin() {
    
    return (
        <div className="login-admin-container">
            <LeftSide className="left-side" />
            <FormularioInicioSesion className="formulario" />
        </div>
    );
}

export default LoginAdmin;