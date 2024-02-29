import './Home.scss';
import HeaderUser from '../NavbarUsuario/HeaderUser';
import MainContentHome from './sub-components/MainContentHome/MainContentHome';
import Footer from '../Footer/Footer';


const Home = () => {

    return (
        <div className="grid-container">
            <HeaderUser logged={false}/>
            <MainContentHome />
            <Footer location={'Usuario'}/>
        </div>
    );
}

export default Home;