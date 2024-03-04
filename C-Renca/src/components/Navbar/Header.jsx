import './Header.scss';
import Nav from './sub-component/Nav';
import { useState, useContext } from 'react'; 
import { ThemeContextUser } from '../../context/ThemeContextUser';
import { Link } from 'react-router-dom';

const Header = () => {
    const [{adminTheme, adminThemeThree, isDark}, toggleTheme] = useContext(ThemeContextUser);

    const [buscadorVisible, setBuscadorVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const toggleBuscador = () => {
        setBuscadorVisible(!buscadorVisible);
        if (!buscadorVisible) {
            setInputValue('');
        }
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <>
            <header className="header">

                <div className="header__container" style={{backgroundColor: isDark ? adminTheme.backgroundColor : adminTheme.backgroundColor}}>
                    <Link to="/home-admin"><img className="header__logo" src="/logo-renca.png" alt="Logo de Renca" title="Home"/></Link>                
                    <i 
                        className='fa-solid fa-right-from-bracket header__logout'
                        id={isDark ? 'i-dark' : 'i-light'}
                        title="Logout"
                    ></i>
                </div>

                <Nav toggleBuscador={toggleBuscador}/>

            </header>            
               
                <div id="ctn-bars-search" className={buscadorVisible ? "active" : ""} style={{backgroundColor: isDark ? adminThemeThree.backgroundColor : adminThemeThree.backgroundColor}}>
                    <input type="text" id="input" placeholder="¿Qué deseas buscar?" value={inputValue} onChange={handleInputChange} />
                </div>  
                
                {/* <ul id="box-search">
                    <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i>HTML</a></li>
                    <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i>CSS</a></li>
                    <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i>JavaScript</a></li>
                    <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i>ViewJS</a></li>
                    <li><a href="#"><i className="fa-solid fa-magnifying-glass"></i>NodeJS</a></li>
                </ul> */}

                <div id="cover-ctn-search" className={buscadorVisible ? "active" : ""} onClick={toggleBuscador}></div>

        </>
    );
}

export default Header;


  