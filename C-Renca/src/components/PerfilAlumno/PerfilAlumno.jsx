import './PerfilAlumno.scss';
import Header from '../Navbar/Header';
import MainContentPA from './sub-components/MainContentPA/MainContentPA';
import Footer from '../Footer/Footer';

const PerfilAlumno = () => {
    return (
        <div className="grid-container">
            <Header/>
            <MainContentPA />
            <Footer/>
        </div>
    );
}

export default PerfilAlumno;