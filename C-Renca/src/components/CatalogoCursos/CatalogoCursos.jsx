import './CatalogoCursos.scss';
import Header from '../Navbar/Header';
import MainContentC from './sub-components/MainContent/MainContentC';
import Footer from '../Footer/Footer';

const CatalogoCursos = () => {
    return (
        <div className="grid-container">
            <Header />
            <MainContentC />
            <Footer />
        </div>
    );
}

export default CatalogoCursos;