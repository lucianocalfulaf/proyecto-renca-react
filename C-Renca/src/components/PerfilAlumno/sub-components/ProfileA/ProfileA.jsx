import './ProfileA.scss';

const ProfileA = () => {

    return (
        <div className="card-containerA">
            <div className="cardA card-with-imageA">
                <div className="card-image-containerA">
                    <img src="/testUser2.png" alt="Card 1 Image" />
                </div>
                <div className="card-contentA">
                    <h2>Nombre</h2>
                    <p>RUTA QUE ESTA HACIENDO</p>
                    <div className="progressA">
                        <div className="progress__fill"></div>
                        <span className="progress__text">0%</span>
                    </div>            
                    <a>CORREO ELECTRONICO</a><br />
                    <a>DIRECCION</a><br />
                    <a>RED SOCIAL</a><br />
                    <a>A</a>
                    <button className="modificar-datosA">Modificar Datos</button>
                </div>
            </div>
            <div className="card2A card-with-image2A">
                <div className="card-image-container2A">
                    <i className="fa-solid fa-book-bookmark" id="card-icon"></i>
                </div>
                <div className="card-content2A">
                    <h2><strong>CURSOS<br />INSCRITOS</strong></h2><br />
                    <p>Curso A</p>
                    <div className="progress2A">
                        <div className="progress__fill2"></div>
                        <span className="progress__text2">0%</span> 
                    </div>
                </div>
            </div>
            <div className="card3A card-with-image3A">
                <div className="card-image-container3A">
                    <i className="fa-solid fa-circle-check"></i>
                </div>
                <div className="card-content3A">
                    <h2><strong>CURSOS<br />APROBADOS</strong></h2><br />
                    <p><strong>Curso A</strong></p>
                </div>
            </div>   
            <div className="card4A card-with-image4A">
                <div className="card-image-container4A">
                    <i className="fa-solid fa-certificate"></i>
                </div>
                <div className="card-content4A">
                    <h2><strong>CERTIFICADOS<br />OBTENIDOS</strong></h2><br />
                    <p><strong>Ciberseguridad</strong></p>
                </div>
            </div>    
        </div>
    );
}

export default ProfileA;