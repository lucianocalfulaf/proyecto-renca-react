import './Categorias.scss';
import Header from '../Navbar/Header';
import MainContentCat from './sub-components/MainContentCat/MainContentCat';
import Footer from '../Footer/Footer';

const Categorias = () => {
    return (
        <div className="grid-container">
            <Header />
            <MainContentCat />
            <Footer />
        </div>
    );
}

export default Categorias;