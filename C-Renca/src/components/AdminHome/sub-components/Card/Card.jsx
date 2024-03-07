import './Card.scss';
import { useEffect, useState } from 'react';

const Card = () => {
    const [loggedAdmin, setLoggedAdmin] = useState(null);

    useEffect(() => {
        // Obtener el ID del usuario almacenado en el localStorage
        const storedUserIDAdmin = localStorage.getItem('userID');

        // Si hay un ID de usuario almacenado, busca el usuario correspondiente
        if (storedUserIDAdmin) {
            const getUser = async () => {
                const res = await fetch('http://localhost:4000/administrador');
                const data = await res.json();
                console.log('Data from server:', data[0]);
                const foundUserAdmin = data.find(user => user.correo === storedUserIDAdmin);
                if (foundUserAdmin) {
                    setLoggedAdmin(foundUserAdmin);
                }
            };

            getUser();
        }
    }, []);

    return (
        <div className="card-containerHA">
            <div className="cardHA card-with-imageHA">
                <div className="card-image-containerHA">
                    <img src="/testUser2.png" alt="Card 1 Image" />
                </div>
                <div className="card-contentHA">
                    <i className="fa-solid fa-user-tie"></i>
                    <h2>John Doe</h2>
                    <p>Jefe de Procesos</p>      
                    <p>admin@gmail.com </p><br />
                    <button className="modificar-datosHA" style={{ display: 'none' }}>Modificar Datos</button>
                </div>
            </div>
            {/* {loggedAdmin && (
                <div key={loggedAdmin.correo} className="cardHA card-with-imageHA">
                    <div className="card-image-containerHA">
                        <img src="/testUser2.png" alt="Card 1 Image" />
                    </div>
                    <div className="card-contentHA">
                        <i className="fa-solid fa-user-tie"></i>
                        <h2>{loggedAdmin.nombre} {loggedAdmin.apellido}</h2>
                        <a>{loggedAdmin.cargo}</a><br />
                        <a>{loggedAdmin.correo}</a><br />
                        <button className="modificar-datos">Modificar Datos</button>
                    </div>
                </div>
            )} */}
        </div>
    );
}

export default Card;

            