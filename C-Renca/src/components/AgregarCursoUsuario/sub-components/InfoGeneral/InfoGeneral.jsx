import './InfoGeneral.css';


function InfoGeneral () {
    return (
        <div className="info-general-container">
            <div className="column-1">
                <img src="/public/img-1.jpg" alt="Curso" />
            </div>
            <div className="column-2">
                <h2><strong>Curso B</strong></h2>
                <h3>Descripción del curso</h3><br /><br />
                <h3>Profesor:</h3><br />
                <h3>Duración estimada: 4 horas</h3>
            </div>
        </div>
    )
}

export default InfoGeneral;