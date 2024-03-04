import './MainContentF.scss';

//importación de componentes
import ArchivosCurso from '/src/components/SubirCurso/sub-components/ArchivosCurso/ArchivosCurso'
import Boton from '/src/components/SubirCurso/sub-components/Boton/Boton'
import Formulario from '/src/components/SubirCurso/sub-components/Formulario/Formulario'
import Miniatura from '/src/components/SubirCurso/sub-components/Miniatura/Miniatura'
import Modulos from '/src/components/SubirCurso/sub-components/Modulos/Modulo'
import Subtitulos from '/src/components/SubirCurso/sub-components/Subtitulos/Subtitulos'
import Requisito from '../Requisito/Requisito';

// Uso de estados
import { useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';

const MainContentF = () => {
    const [{mainTheme, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    return (
        <main className="main-7" style={{backgroundColor: toggleTheme ? mainTheme.backgroundColor : mainTheme.color }}>
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