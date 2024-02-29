import './MainContentP.scss';
import Profile from '../Profile/Profile';

const MainContentP = () => {
    return (
        <main className="main-content-profile">
            <h2 className="section-title"><i className="fa-solid fa-address-card"></i>Mi Perfil</h2>
            <Profile />
        </main>
    );
}

export default MainContentP;