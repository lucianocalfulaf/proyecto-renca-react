import { createBrowserRouter } from "react-router-dom";
import CatalogoCursos from "../src/componentes/CatalogoCursos/Pagina-catalogoCursos";
import AgregarCursos from "../src/componentes/AgregarCursoUsuario/AgregarCursoUsuario";
import DetalleCurso from "../src/componentes/DetalleCurso/DetalleCurso";
import DetalleCursoUsuario from "../src/componentes/DetalleCursoUsuario/DetalleCursoUsuario";
import LoginUsuario from "../src/componentes/LoginUsuario/LoginUsuario";
import LoginAdmin from "../src/componentes/LoginAdmin/LoginAdmin";
import Registro from "../src/componentes/Registro/Registro";
import SubirCurso from "../src/componentes/SubirCurso/SubirCurso";
const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/catalogo-cursos", element: <CatalogoCursos />},
    {path: "/agregar-cursos", element: <AgregarCursos />},
    {path: "/detalle-cursos", element: <DetalleCurso />},
    {path: "/detalle-cursos-usuario", element: <DetalleCursoUsuario />},
    {path: "/login", element: <LoginUsuario />},
    {path: "/login-admin", element: <LoginAdmin />},
    {path: "/registro", element: <Registro />},
    {path: "/subir-cursos", element: <SubirCurso />},


]);
export default router
