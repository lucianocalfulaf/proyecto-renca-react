import './MainContentF.scss';
import React, { useState } from 'react';
import axios from 'axios'; // Importa axios para realizar la solicitud POST

//importación de componentes
import ArchivosCurso from '/src/components/SubirCurso/sub-components/ArchivosCurso/ArchivosCurso';
import Formulario from '/src/components/SubirCurso/sub-components/Formulario/Formulario';
import Imagen from '/src/components/SubirCurso/sub-components/Miniatura/Miniatura';
import AgregarModulo from '/src/components/SubirCurso/sub-components/Modulos/Modulo';
import Subtitulos from '/src/components/SubirCurso/sub-components/Subtitulos/Subtitulos';
import Requisito from '../Requisito/Requisito';

function MainContentF() {
    const [formData, setFormData] = useState({
        ArchivosCurso: {},
        Imagen: {},
        Modulos: [],
        Subtitulos: {},
        Requisito: {},
        Formulario: {},
    });

    const handleFileSelect = (file) => {
        // Esta función se utiliza para manejar la selección de archivos
        // y puede ser utilizada en múltiples componentes
        // Aquí puedes realizar acciones adicionales con el archivo seleccionado
    };

    const handleArchivosCursoChange = (ArchivosCursoData) => {
        setFormData({...formData, ArchivosCurso: ArchivosCursoData});
    };

    const handleImagenChange = (ImagenData) => {
        setFormData({...formData, Imagen: ImagenData});
    };
    
    const handleModulosChange = (ModulosData) => {
        setFormData({...formData, Modulos: ModulosData});
    };

    const handleSubtitulosChange = (SubtitulosData) => {
        setFormData({...formData, Subtitulos: SubtitulosData});
    };

    const handleFormularioChange = (FormularioData) => {
        setFormData({...formData, Formulario: FormularioData});
    };

    const handleRequisitoChange = (RequisitoData) => {
        setFormData({...formData, Requisito: RequisitoData});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log("Form Data:", formData);
        
        // Realiza la solicitud POST utilizando axios
        axios.post("http://localhost:4000/cursos", formData)
            .then(response => {
                console.log('Curso creado:', response.data);
                // Puedes realizar acciones adicionales después de recibir la respuesta del servidor
            })
            .catch(error => {
                console.error('Error al enviar el formulario:', error);
                // Puedes manejar errores aquí
            });
    };

    return (
        <main className="main-7">
            <h2 className="section-title-sc"><i className="fa-solid fa-upload"></i>Subir Curso</h2>
            <div className="container">
                <div className="grupo-1">
                    <ArchivosCurso onFileSelect={handleFileSelect} onChange={handleArchivosCursoChange} />
                    <div className="box-2">
                        <Formulario onChange={handleFormularioChange} />
                        <AgregarModulo onModulosChange={handleModulosChange} />
                    </div>
                    <div className="box-3">
                        <div className="seccion-derecha">
                            <Imagen onFileSelect={handleFileSelect} onChange={handleImagenChange} />
                            <Subtitulos onFileSelect={handleFileSelect} onChange={handleSubtitulosChange} />
                            <Requisito onChange={handleRequisitoChange} />
                            <button className="custom-button" onClick={handleSubmit}>Subir curso</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContentF;
