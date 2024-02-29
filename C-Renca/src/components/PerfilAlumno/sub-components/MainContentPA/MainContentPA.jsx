import './MainContentPA.scss';
import ProfileA from '../ProfileA/ProfileA';

const MainContentPA = () => {
    return (
        <main className="main-content-PA">
            <h2 className="section-title-PA"><i className="fa-solid fa-address-card"></i>Alumnos</h2>
            <ProfileA />
        </main>
    );
}

export default MainContentPA;