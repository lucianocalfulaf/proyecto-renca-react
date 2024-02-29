import './navbar-styles/HeaderUser.scss';
import { Link } from 'react-router-dom';
import NavUser from './NavUser';

const HeaderUser = ({ logged }) => {

    return (
        <header className="headerUser" >

            <div className="headerUser__container" style={{ background: logged ? '#E95929' : `linear-gradient(to right, #D75E24 16.7%, #E68E0C 16.7% 33.4%, #769E33 33.4% 50.1%, #009A88 50.1% 66.8%, #5FB9D3 66.8% 83.5%, #0192D0 83.5% 100%)`}}>
                <Link to="/" className="headerUser__link"><img className="headerUser__logo" src="/logo-renca.png" alt="Logo de Renca"/></Link>    
                <img className="headerUser__favicon" src="/favicon.png" alt="Favicon de Renca"/>            
            </div>

            <NavUser 
                displayOne={logged ? true : false}
            />     

        </header>
    );
}

export default HeaderUser;  