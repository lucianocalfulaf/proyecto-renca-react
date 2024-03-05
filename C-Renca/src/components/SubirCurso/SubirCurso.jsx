import './SubirCurso.scss';
import './SubirCurso.css';
import Header from '../Navbar/Header';
import MainContentF from './sub-components/MainContent/MainContentF';
import Footer from '../Footer/Footer';
//import FormularioFetch from '/src/components/SubirCurso/sub-components/Formulario/FormularioFetch'; Prueba que hizo Ariel, igual no me funciona :(

const SubirCurso = () => {
    return (
        <div className="grid-container">
            <Header />
           {/*} <FormularioFetch />*/}
            <MainContentF />
           {/*<Footer />*/}
        </div>
    );
}

export default SubirCurso;