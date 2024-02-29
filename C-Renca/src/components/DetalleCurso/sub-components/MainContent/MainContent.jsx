import './MainContent.scss';
import InfoGeneral from '../../../AgregarCursoUsuario/sub-components/InfoGeneral/InfoGeneral';
import Acordeon from '../../../AgregarCursoUsuario/sub-components/Acordeon/Acordeon';
import BotonesModificar from '../BotonesModificar/BotonesModificar';
import AlumnosEnCurso from '../AlumnosEnCurso/AlumnosEnCurso';

const MainContent = () => {
    return (
        <main className="main">
            <h2 className="section-title"><i className="fa-solid fa-chalkboard-user"></i>Curso</h2>
            <div className="top-row">
                <InfoGeneral />
                <BotonesModificar/>
            </div>
            <div className="bottom-row">
                <Acordeon />
                <AlumnosEnCurso />
            </div>
        </main>
    );
}

export default MainContent;