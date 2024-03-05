// En AgregarModulo.jsx
import React, { useState } from 'react';
import './Modulo.css';

function AgregarModulo({ onModulosChange }) {
    const [numModulos, setNumModulos] = useState(0);
    const [modulos, setModulos] = useState([]);

    const handleModuloChange = (event) => {
        const num = parseInt(event.target.value);
        if (!isNaN(num) && num >= 0) {
            setNumModulos(num);
            setModulos(Array.from({ length: num }, (_, i) => ({ name: '', description: '' })));
        } else {
            setNumModulos(0);
            setModulos([]);
        }
        // Llama a la función onModulosChange con los módulos actualizados
        onModulosChange(modulos);
    };

    const handleModuleInputChange = (index, type, value) => {
        const updatedModules = [...modulos];
        updatedModules[index][type] = value;
        setModulos(updatedModules);
        // Llama a la función onModulosChange con los módulos actualizados
        onModulosChange(updatedModules);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(modulos);
        // Handle form submission
    };

    return (
        <div>
            <form>
                <div>
                    <label>Cantidad de módulos</label>
                    <input type="number" value={numModulos} onChange={handleModuloChange} />
                </div>
                {modulos.map((modulo, index) => (
                    <div key={index}>
                        <label>{`Módulo ${index + 1}`}</label>
                        <input
                            type="text"
                            value={modulo.name}
                            onChange={(e) => handleModuleInputChange(index, 'name', e.target.value)}
                        />
                        <label>{`Descripción ${index + 1}`}</label>
                        <input
                            type="text"
                            value={modulo.description}
                            onChange={(e) => handleModuleInputChange(index, 'description', e.target.value)}
                        />
                    </div>
                ))}
                <button type="submit" onClick={handleSubmit}>Confirmar módulos</button>
            </form>
        </div>
    );
}

export default AgregarModulo;

