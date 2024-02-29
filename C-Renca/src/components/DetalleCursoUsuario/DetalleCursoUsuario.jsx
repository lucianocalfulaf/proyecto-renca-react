import './DetalleCursoUsuario.scss';
import HeaderUser from '../NavbarUsuario/HeaderUser';
import MainContentB from './sub-components/MainContent/MainContentB';
import Footer from '../Footer/Footer';

const DetalleCursoUsuario = () => {
    return (
        <div className="grid-container">
            <HeaderUser logged={true}/>
            <MainContentB />
            <Footer location={'Usuario'}/>
        </div>
    );
}

export default DetalleCursoUsuario;