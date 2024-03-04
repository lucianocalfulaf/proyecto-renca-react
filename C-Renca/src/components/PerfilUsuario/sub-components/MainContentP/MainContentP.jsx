import './MainContentP.scss';
import Profile from '../Profile/Profile';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentP = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main-content-profile" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            <h2 className="section-title"><i className="fa-solid fa-address-card"></i>Mi Perfil</h2>
            <Profile />
        </main>
    );
}

export default MainContentP;