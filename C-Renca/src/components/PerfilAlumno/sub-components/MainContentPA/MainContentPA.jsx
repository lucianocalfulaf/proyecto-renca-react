import './MainContentPA.scss';
import ProfileA from '../ProfileA/ProfileA';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentPA = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main-content-PA" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
            <h2 className="section-title-PA"><i className="fa-solid fa-address-card"></i>Alumnos</h2>
            <ProfileA />
        </main>
    );
}

export default MainContentPA;