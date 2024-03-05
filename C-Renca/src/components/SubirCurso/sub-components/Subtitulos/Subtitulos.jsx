import React from 'react';
import './Subtitulos.css';


function Subtitulos({ onChange }) {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        // Llama a la función de devolución de llamada para enviar el archivo seleccionado al componente padre
        onChange(selectedFile);
    };

    return (
        <>
            <h4 style={{ textAlign: 'left' }}>Añadir subtítulos</h4>
           
            <div className="selectFile">
                <label htmlFor="file">Seleccionar archivo</label>
                <input type="file" name="files[]" id="file" onChange={handleFileChange} />
            </div>
        </>
    );
}

export default Subtitulos;
