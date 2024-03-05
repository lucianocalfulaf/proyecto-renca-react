import './MainContentE.scss';
import VerCategoria from '../VerCategoria/VerCategoria.jsx';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentE = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main-6" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            <VerCategoria />
        </main>
    );
}

export default MainContentE;