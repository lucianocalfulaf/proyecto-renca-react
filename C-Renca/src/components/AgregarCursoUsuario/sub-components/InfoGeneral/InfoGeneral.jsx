import { useState, useEffect } from 'react';
import './InfoGeneral.css';
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

function InfoGeneral ({ courseId }) {
    const [curso, setCurso] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Hacer la solicitud para obtener el curso por su ID
        axios.get(`/api/cursos/${courseId}`)
            .then(response => {
                setCurso(response.data);
            })
            .catch(error => {
                console.error('Error al obtener el curso:', error);
                setError('Error al obtener el curso');
            });
    }, [courseId]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!curso) {
        return <div>Cargando...</div>;
    }

    // Destructura los campos del objeto curso
    const { imagen, nombreCurso, profesor, duracion } = curso;

    return (
        <div className="info-general-container">
            <div className="column-1">
                <img src="/img-1.jpg" alt="Curso" />
            </div>
            <div className="column-2">
                <h2><strong>{nombreCurso}</strong></h2>
                <h3>Descripción del curso</h3><br /><br />
                <h3>Profesor: {profesor}</h3><br />
                <h3>Duración estimada: {duracion} horas</h3>
            </div>
        </div>
    );
}

export default InfoGeneral;
