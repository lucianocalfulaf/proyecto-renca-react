import './MainContent.scss';
import InfoGeneral from '../../../AgregarCursoUsuario/sub-components/InfoGeneral/InfoGeneral';
import Acordeon from '../../../AgregarCursoUsuario/sub-components/Acordeon/Acordeon';
import BotonesModificar from '../BotonesModificar/BotonesModificar';
import AlumnosEnCurso from '../AlumnosEnCurso/AlumnosEnCurso';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContent = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            <h2 className="section-title-dc"><i className="fa-solid fa-chalkboard-user"></i>Curso</h2>
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