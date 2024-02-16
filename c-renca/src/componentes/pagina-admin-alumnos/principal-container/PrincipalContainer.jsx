import './principal-container-styles/PrincipalContainer.scss';
import Header from '../navbar/Header';
import Main from '../main/Main';
import Footer from '../footer/Footer';

const PrincipalContainer = () => {
    return (
        <div className="grid-container">
            <Header /> 
            <Main>
                
            </Main>
            <Footer /> 
        </div>
    );
}

export default PrincipalContainer;