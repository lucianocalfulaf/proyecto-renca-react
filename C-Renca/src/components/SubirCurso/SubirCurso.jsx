import './SubirCurso.scss';
import Header from '../Navbar/Header';
import MainContentF from './sub-components/MainContent/MainContentF';
import Footer from '../Footer/Footer';

const SubirCurso = () => {
    return (
        <div className="grid-container">
            <Header />
            <MainContentF />
            <Footer />
        </div>
    );
}

export default SubirCurso;