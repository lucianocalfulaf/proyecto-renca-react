import './Card.scss';

const Card = () => {
    return (
        <div className="card-containerHA">
            <div className="cardHA card-with-imageHA">
                <div className="card-image-containerHA">
                    <img src="/testUser2.png" alt="Card 1 Image" />
                </div>
                <div className="card-contentHA">
                    <h2>Nombre Admin</h2>
                    <p>Cargo</p>      
                    <a>CORREO ELECTRONICO</a><br />
                    <a>DIRECCION</a><br />
                    <a>RED SOCIAL</a><br />
                    <button className="modificar-datosHA">Modificar Datos</button>
                </div>
            </div>
        </div>
    );
}

export default Card;