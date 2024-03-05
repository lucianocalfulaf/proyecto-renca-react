import React, { useState } from 'react';
import ArchivosCurso from '/src/components/SubirCurso/sub-components/ArchivosCurso/ArchivosCurso';
import Formulario from '/src/components/SubirCurso/sub-components/Formulario/Formulario';
import Miniatura from '/src/components/SubirCurso/sub-components/Miniatura/Miniatura';
import Modulos from '/src/components/SubirCurso/sub-components/Modulos/Modulo';
import Subtitulos from '/src/components/SubirCurso/sub-components/Subtitulos/Subtitulos';
import Requisito from '../Requisito/Requisito'; 

function Boton() {
    const [formData, setFormData] = useState({
        ArchivosCurso: {},
        Miniatura: {},
        Modulos: {},
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

    const handleMiniaturaChange = (MiniaturaData) => {
        setFormData({...formData, Miniatura: MiniaturaData});
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
        console.log("Form Data:", formData);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <ArchivosCurso onFileSelect={handleFileSelect} onChange={handleArchivosCursoChange} />
                <Miniatura onFileSelect={handleFileSelect} onChange={handleMiniaturaChange} />
                <Modulos onChange={handleModulosChange} />
                <Subtitulos onFileSelect={handleFileSelect} onChange={handleSubtitulosChange} />
                <Requisito onChange={handleRequisitoChange} />
                <Formulario onChange={handleFormularioChange} />
                <button className="custom-button">Subir curso</button>
            </form>
        </div>
    );
}

export default Boton;
