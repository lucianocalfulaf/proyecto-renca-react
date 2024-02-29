import './PerfilUsuario.scss';
import HeaderUser from '../NavbarUsuario/HeaderUser';
import MainContentP from './sub-components/MainContentP/MainContentP';
import Footer from '../Footer/Footer';

const PerfilUsuario = () => {
    return (
        <div className="grid-container">
            <HeaderUser logged={true}/>
            <MainContentP />
            <Footer location={'Usuario'}/>
        </div>
    );
}

export default PerfilUsuario;