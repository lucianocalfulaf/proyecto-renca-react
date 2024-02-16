import './navbar-styles/Nav.scss';

const Nav = ({ toggleBuscador }) => {
    return (    
        <>      
            <nav className="navbar">

                <ul className="navbar__list">

                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>Perfiles</span> 
                        </a>
                    </li>
                
                
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>Cursos</span>
                        </a>
                    </li>
                
                
                    <li className="navbar__item">
                        <a href="#" className="navbar__link">
                            <span>Categorías</span>
                        </a>
                    </li>
                </ul>

                <div className="navbar__link--icons">
                        
                        <a href="#" className="navbar__icon">
                            <i className="fa-solid fa-sun"></i>
                        </a>
                    
                        <a href="#" className="navbar__icon" onClick={toggleBuscador}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </a>
                        
                </div>

            </nav> 
        </>
    );
}

export default Nav;