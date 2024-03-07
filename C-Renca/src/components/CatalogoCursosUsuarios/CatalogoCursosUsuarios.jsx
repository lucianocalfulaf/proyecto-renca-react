import './CatalogoCursosUsuarios.scss';
import HeaderUser from '../NavbarUsuario/HeaderUser';
import MainContentC from './sub-components/MainContent/MainContentC';
import Footer from '../Footer/Footer';

const CatalogoCursosUsuarios = () => {
    return (
        <div className="grid-container">
            <HeaderUser logged={true} />
            <MainContentC />
            <Footer location={'Usuario'}/>
        </div>
    );
}

export default CatalogoCursosUsuarios;