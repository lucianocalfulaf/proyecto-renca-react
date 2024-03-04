import './MainContentD.scss';
import CrearCategoria from '../CrearCategoria/CrearCategoria';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentD = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main-5" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            <CrearCategoria />
        </main>
    );
}

export default MainContentD;