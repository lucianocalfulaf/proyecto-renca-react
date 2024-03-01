import './MainContentF.scss';

//importación de componentes
import ArchivosCurso from '/src/components/SubirCurso/sub-components/ArchivosCurso/ArchivosCurso'
import Boton from '/src/components/SubirCurso/sub-components/Boton/Boton'
import Formulario from '/src/components/SubirCurso/sub-components/Formulario/Formulario'
import Miniatura from '/src/components/SubirCurso/sub-components/Miniatura/Miniatura'
import Modulos from '/src/components/SubirCurso/sub-components/Modulos/Modulo'
import Subtitulos from '/src/components/SubirCurso/sub-components/Subtitulos/Subtitulos'
import Requisito from '../Requisito/Requisito';

const MainContentF = () => {
    return (
        <main className="main-7">
            <h2 className="section-title-sc" style={{color: '#60BDB1'}}><i className="fa-solid fa-upload"></i>Subir Curso</h2>
            <div className="container">
                <div className="grupo-1">
                    <ArchivosCurso/>
                    <div className="box-2">
                        <Formulario/>
                        <Modulos/>
                    </div>
                    <div className="box-3">
                        <div className="seccion-derecha">
                            <div className="cuadrado"></div>
                                <Miniatura/>
                                <Subtitulos/>
                                <Requisito />
                                <Boton />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainContentF;