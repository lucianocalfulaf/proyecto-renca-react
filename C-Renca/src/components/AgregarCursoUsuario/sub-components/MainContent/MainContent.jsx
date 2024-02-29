import './MainContent.scss';
import InfoGeneral from '../InfoGeneral/InfoGeneral';
import BotonAgregar from '../BotonAgregar/BotonAgregar';
import Acordeon from '../Acordeon/Acordeon';



const MainContent = () => {
    return (
        <main className="main">
            <h2 className="section-title"><i className="fa-solid fa-chalkboard-user"></i>Mi Curso</h2>
            <div className="top-row-2">
                <InfoGeneral />
                <BotonAgregar/>
            </div>
            <div className="bottom-row-2">
                <Acordeon />
            </div>
        </main>
    );
}

export default MainContent;