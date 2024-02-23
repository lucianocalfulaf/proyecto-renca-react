import './DetalleCursoUsuario.scss';
import Header from '../Navbar/Header';
import MainContentB from './sub-components/MainContent/MainContentB';
import Footer from '../Footer/Footer';

const DetalleCursoUsuario = () => {
    return (
        <div className="grid-container">
            <Header />
            <MainContentB />
            <Footer />
        </div>
    );
}

export default DetalleCursoUsuario;