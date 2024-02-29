import './Profile.scss';

const Profile = () => {

    return (
        <div className="card-container">
            <div className="card card-with-image">
                <div className="card-image-container">
                    <img src="/testUser2.png" alt="Card 1 Image" />
                </div>
                <div className="card-content">
                    <h2>Nombre</h2>
                    <p>RUTA QUE ESTA HACIENDO</p>
                    <div className="progress">
                        <div className="progress__fill"></div>
                        <span className="progress__text">0%</span>
                    </div>            
                    <a>CORREO ELECTRONICO</a><br />
                    <a>DIRECCION</a><br />
                    <a>RED SOCIAL</a><br />
                    <a>A</a>
                    <button className="modificar-datos">Modificar Datos</button>
                </div>
            </div>
            <div className="card2 card-with-image2">
                <div className="card-image-container2">
                    <i className="fa-solid fa-book-bookmark" id="card-icon"></i>
                </div>
                <div className="card-content2">
                    <h2><strong>CURSOS<br />INSCRITOS</strong></h2><br />
                    <p>Curso A</p>
                    <div className="progress2">
                        <div className="progress__fill2"></div>
                        <span className="progress__text2">0%</span> 
                    </div>
                </div>
            </div>
            <div className="card3 card-with-image3">
                <div className="card-image-container3">
                    <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="card-content3">
                    <h2><strong>CURSOS<br />APROBADOS</strong></h2><br />
                    <p>Curso A</p>
                </div>
            </div>   
            <div className="card4 card-with-image4">
                <div className="card-image-container4">
                    <i className="fa-solid fa-certificate"></i>
                </div>
                <div className="card-content4">
                    <h2><strong>CERTIFICADOS<br />OBTENIDOS</strong></h2><br />
                    <p>Ciberseguridad</p>
                </div>
            </div>    
        </div>
    );
}

export default Profile;