import './MainContentHA.scss';
import Card from '../Card/Card';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentHA = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="mainHA" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color}}>
            <h1>Bienvenido(a)!</h1>
            <Card />
        </main>
    );
}

export default MainContentHA;