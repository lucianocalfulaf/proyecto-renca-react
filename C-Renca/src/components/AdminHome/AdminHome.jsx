import './AdminHome.scss';
import Header from '../Navbar/Header';
import MainContentHA from './sub-components/MainContentHA/MainContentHA';
import Footer from '../Footer/Footer';


const AdminHome = () => {
    return (
        <div className="grid-container">
            <Header />
            <MainContentHA />
            <Footer />
        </div>
    );
}

export default AdminHome;