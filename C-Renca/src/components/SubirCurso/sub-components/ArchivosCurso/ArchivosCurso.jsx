import React from 'react';
import './ArchivosCurso.css';

function ArchivosCurso({ onFileSelect }) {
    const handleFileSelect = (e) => {
        const selectedFile = e.target.files[0];
        // Llama a la función de devolución de llamada para enviar la información al componente padre
        onFileSelect(selectedFile);
    };

    return (
        <div className="box-1">
            <div className="zone">
                <div id="dropZ">
                    <i className="fa fa-cloud-upload custom-icon"></i>
                    <h4>Haz click para subir el video</h4>
                    <div className="selectFile">
                        <label htmlFor="file">Seleccionar archivo</label>
                        <input type="file" name="files[]" onChange={handleFileSelect} />
                    </div>
                    <h4>Tamaño máximo: x MB</h4>
                </div>
            </div>
            <h4 style={{ color:'#009A88'}}>¡Revisa que el formato sea el correcto!</h4>
        </div>
    );
}

export default ArchivosCurso;
