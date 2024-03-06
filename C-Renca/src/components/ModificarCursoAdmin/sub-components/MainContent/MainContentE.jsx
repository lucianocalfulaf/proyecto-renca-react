import './MainContentE.scss';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';
import ModificarCurso from '../ModificarCurso/ModificarCurso';

const MainContentE = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main-6" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            <ModificarCurso />
        </main>
    );
}

export default MainContentE;