import './navbar-styles/NavUser.scss';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContextUser } from '../../context/ThemeContextUser';
import InputSearch from './sub-components/InputSearch';

const Nav = ({ displayOne }) => {
    const [{theme, isDark}, toggleTheme] = useContext(ThemeContextUser);

    return (    
        <>      
            <nav className="navbarUser" style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color ,
            }}>

                <ul className="navbarUser__list">

                    {/* Explorar Cursos */}
                    <li className="navbarUser__item--explorar" ><a href="#">Explorar Cursos</a></li>
                    
                    {/* Buscar */}
                    <li className="navbarUser__search">

                        <InputSearch /> {/* Componente InputSearch --> Implementado con React Bootstrap*/}    

                        {/* Botón Modo Claro | Modo Oscuro */}
                        <div className="navbarUser__item--icons">                            
                            <a href="#" className="navbarUser__icon">
                                <i className="fa-solid fa-sun" onClick={toggleTheme}></i>
                            </a>                            
                        </div>                        

                    </li>

                    <li className="navbarUser__item--registro" style={{ display: displayOne ? 'none' : 'flex'}}>
                        <i className="fa-solid fa-user"></i>
                        <a href="#"><Link to="/login">Inicio</Link></a> | <a href="#"><Link to="/registro">Registro</Link></a>
                    </li>

                    <li className="navbarUser__item--logged" style={{ display: displayOne ? 'flex' : 'none'}}>
                        <Link to="/perfil-usuario" className='userImage'><img src="/testUser.png" alt="Foto Usuario" title="Perfil Usuario"/></Link>
                        <br />
                        <Link to="/login" className='iconImage'><i className='fa-solid fa-right-from-bracket' title="Logout"></i></Link>
                    </li>


                </ul>

            </nav> 
        </>
    );
}

export default Nav;