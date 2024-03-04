import './MainContent.scss';
import InfoGeneral from '../InfoGeneral/InfoGeneral';
import BotonAgregar from '../BotonAgregar/BotonAgregar';
import Acordeon from '../Acordeon/Acordeon';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';



const MainContent = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color}}>
            <h2 className="section-title-acu"><i className="fa-solid fa-chalkboard-user"></i>Mi Curso</h2>
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