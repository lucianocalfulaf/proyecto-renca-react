import './MainContent.scss';
import TarjetaCursosUsuarios from '../TarjetaCursosUsuarios/TarjetaCursosUsuarios';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentC = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main-4" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            <TarjetaCursosUsuarios />
        </main>
    );
}

export default MainContentC;