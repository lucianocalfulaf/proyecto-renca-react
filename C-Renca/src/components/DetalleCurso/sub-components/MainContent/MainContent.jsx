import './MainContent.scss';
import InfoGeneral from '../../../AgregarCursoUsuario/sub-components/InfoGeneral/InfoGeneral';
import Acordeon from '../../../AgregarCursoUsuario/sub-components/Acordeon/Acordeon';
import BotonesModificar from '../BotonesModificar/BotonesModificar';
import AlumnosEnCurso from '../AlumnosEnCurso/AlumnosEnCurso';

const MainContent = () => {
    return (
        <main className="main">
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