import './MainContentB.scss';
import InfoGeneral from '../../../AgregarCursoUsuario/sub-components/InfoGeneral/InfoGeneral';
import BotonContinuar from '../BotonContinuar/BotonContinuar'; 
import Acordeon from '../../../AgregarCursoUsuario/sub-components/Acordeon/Acordeon';



const MainContentB = () => {
    return (
        <main className="main-3">
            <h2 className="section-title"><i className="fa-solid fa-chalkboard-user"></i>Mis Cursos</h2>
            <div className="top-row-3">
                <InfoGeneral />
                <BotonContinuar/>
            </div>
            <div className="bottom-row-3">
                <h3 className="section-subtitle">Contenidos del curso:</h3>
                <Acordeon />
            </div>
        </main>
    );
}

export default MainContentB;