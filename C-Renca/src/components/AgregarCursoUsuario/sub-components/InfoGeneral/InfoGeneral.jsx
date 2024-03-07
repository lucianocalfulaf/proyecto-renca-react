import React, { useState, useEffect } from 'react';
import './InfoGeneral.css';
import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

function InfoGeneral({ courseId }) {
    const [curso, setCurso] = useState(null);
    const [error, setError] = useState(null);
    const [cursoInfo, setCursoInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`URL_DEL_ENDPOINT_DEL_API/${courseId}`);
                setCurso(response.data);
            } catch (error) {
                setError('Error al cargar el curso.');
            }
        };

        fetchData();

        const storedCursoInfo = localStorage.getItem('cursoSeleccionado');
        if (storedCursoInfo) {
            const parsedCursoInfo = JSON.parse(storedCursoInfo);
            setCursoInfo(parsedCursoInfo);
        }
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
            {cursoInfo && (
                <div className='column-1'>
                    <img src={cursoInfo.imagen.url} alt="Curso" />
                </div>
            )}
            <div>
                <h2><strong>{cursoInfo.nombreCurso}</strong></h2>
                <h3>Descripción del curso</h3><br /><br />
                <h3>Profesor: {cursoInfo.profesor}</h3><br />
                <h3>Duración estimada: {cursoInfo.duracion} horas</h3>
            </div>
        </div>
    );
}

export default InfoGeneral;
