import './AgregarCursoUsuario.scss';
import HeaderUser from '../NavbarUsuario/HeaderUser';
import MainContent from './sub-components/MainContent/MainContent';
import Footer from '../Footer/Footer';

const DetalleCursoUsuario = () => {

    return (
        <div className="grid-container">
            <HeaderUser logged={true}/>
            <MainContent />
            <Footer location={'Usuario'}/>
        </div>
    );
}

export default DetalleCursoUsuario;