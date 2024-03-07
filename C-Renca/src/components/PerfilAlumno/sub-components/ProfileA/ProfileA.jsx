import React, { useState, useEffect } from 'react';
import './ProfileA.scss';

const ProfileA = () => {
    // Estado para almacenar la información del usuario
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Obtener la información del usuario guardada en localStorage
        const storedUserInfo = localStorage.getItem('usuarioSeleccionado');
        if (storedUserInfo) {
            // Si se encuentra la información del usuario, analízala y actualiza el estado
            const parsedUserInfo = JSON.parse(storedUserInfo);
            setUserInfo(parsedUserInfo);
        }
    }, []);

    return (
        <div className="card-containerA">
                {userInfo && (
                <div className="cardA card-with-imageA" >
                    <div className="card-image-containerA">
                        <img src={userInfo.imagen.url} alt="Card 1 Image" />
                    </div>
                    <div className="card-contentA">
                        <h2>{userInfo.nombre} {userInfo.apellido}</h2>
                        <div className="progressA">
                            <div className="progress__fill"></div>
                            <span className="progress__text">0%</span>
                        </div>            
                        <a>{userInfo.correo}</a><br />
                        <a>{userInfo.direccion}</a><br />
                        <a>{userInfo.redSocial}</a><br />
                        <a>{userInfo.a}</a>
                        {/* <button className="modificar-datosA">Modificar Datos</button> */}
                    </div>
                </div>
            )}
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
                    <p>Curso A</p>
                </div>
            </div>   
            <div className="card4A card-with-image4A">
                <div className="card-image-container4A">
                    <i className="fa-solid fa-certificate"></i>
                </div>
                <div className="card-content4A">
                    <h2><strong>CERTIFICADOS<br />OBTENIDOS</strong></h2><br />
                    <p>Ciberseguridad</p>
                </div>
            </div>    
        </div>
    );
}

export default ProfileA;