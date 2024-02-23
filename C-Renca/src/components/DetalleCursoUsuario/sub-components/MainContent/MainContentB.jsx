import './MainContentB.scss';
import InfoGeneral from '../../../AgregarCursoUsuario/sub-components/InfoGeneral/InfoGeneral';
import BotonContinuar from '../BotonContinuar/BotonContinuar'; 
import Acordeon from '../../../AgregarCursoUsuario/sub-components/Acordeon/Acordeon';



const MainContentB = () => {
    return (
        <main className="main-3">
            <div className="top-row-3">
                <InfoGeneral />
                <BotonContinuar/>
            </div>
            <div className="bottom-row-3">
                <Acordeon />
            </div>
        </main>
    );
}

export default MainContentB;