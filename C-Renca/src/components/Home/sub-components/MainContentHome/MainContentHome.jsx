import './MainContentHome.scss';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentHome = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode
    console.log("theme", mainTheme);

    return (
        <main className="main-home" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            
        </main>
    );
}

export default MainContentHome;