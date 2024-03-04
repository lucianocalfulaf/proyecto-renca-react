import './MainContent.scss';
import SearchBar from '../SearchBar/SearchBar';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';



const MainContent = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color}}>
            <SearchBar />
        </main>
    );
}

export default MainContent;