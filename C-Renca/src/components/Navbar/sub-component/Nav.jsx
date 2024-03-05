import './Nav.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContextUser } from '../../../context/ThemeContextUser';

const Nav = ({ toggleBuscador }) => {
    const [{ adminThemeTwo, isDark}, toggleTheme] = useContext(ThemeContextUser);

    return (    
        <>      
            <nav className="navbar" style={{backgroundColor: isDark ? adminThemeTwo.backgroundColor : adminThemeTwo.backgroundColor}}>

                <ul className="navbar__list">

                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <Link to="/alumnos-admin"
                                className={isDark ? 'navbar__link--dark' : 'navbar__link--light'}
                            >
                                <span>Perfiles</span>
                            </Link>
                        </a>
                    </li>
                
                
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <Link to="/catalogo-cursos" 
                                className={isDark ? 'navbar__link--dark' : 'navbar__link--light'}
                            >
                                <span>Cursos</span>
                            </Link>
                        </a>
                    </li>
                
                
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <Link to="/ver-categoria-admin"
                                className={isDark ? 'navbar__link--dark' : 'navbar__link--light'}
                            >
                                <span>Categorías</span>
                            </Link>
                        </a>
                    </li>
                </ul>

                <div className="navbar__link--icons">
                        
                        <a 
                            href="#" 
                            className={isDark ? 'navbar__icon--dark' : 'navbar__icon--light'}
                        >
                                <i className="fa-solid fa-sun" onClick={toggleTheme}></i>
                        </a>
                    
                        <a 
                            href="#"
                            className={isDark ? 'navbar__icon--dark' : 'navbar__icon--light'}
                            onClick={toggleBuscador}
                        >
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        
                </div>

            </nav> 
        </>
    );
}

export default Nav;