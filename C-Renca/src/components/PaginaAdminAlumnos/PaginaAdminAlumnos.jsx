import './PaginaAdminAlumnos.scss';
import Header from '../Navbar/Header';
import MainContent from './sub-components/MainContent/MainContent';
import Footer from '../Footer/Footer';


const PaginaAdminAlumnos = () => {
    return (
        <div className="grid-container">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default PaginaAdminAlumnos;