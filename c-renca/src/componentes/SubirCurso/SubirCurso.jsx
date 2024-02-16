import React, { useState } from 'react';
import './SubirCurso.css';
import Boton from '/componentes/SubirCurso/Boton/Boton'; 
import Formulario from '/componentes/SubirCurso/Formulario/Formulario';
import Miniatura from '/componentes/SubirCurso/Miniatura/Miniatura';
import ArchivosCurso from '/componentes/SubirCurso/ArchivosCurso/ArchivosCurso';
import Subtitulos from '/componentes/SubirCurso/Subtitulos/Subtitulos';
import Footer from '/componentes/Footer/Footer'
{/*import Navbar from '/components/Navbar/Container'*/}

function SubirCurso() {
    const [archivosSubidos, setArchivosSubidos] = useState([]);

    // Función para guardar los archivos subidos
    const guardarArchivosSubidos = (nuevosArchivos) => {
      setArchivosSubidos(nuevosArchivos);
    };

    return (
        <main className="container">
              {/*<Navbar />*/}
            <div className="grupo-2">
                <h2 style={{color: '#60BDB1'}}>Subir Curso</h2>
            </div>
            <div className="grupo-1">
                <ArchivosCurso />
                <div className="box-2">
                    <Formulario /> 
                </div>
                <div className="box-3">
                    <div className="seccion-derecha">
                        <div className="cuadrado"></div>
                        <Miniatura />
                        <Subtitulos />
                        <Boton /> 
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default SubirCurso;
