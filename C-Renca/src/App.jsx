import './styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// Ruteo de páginas
import PaginaAdminAlumnos from './components/PaginaAdminAlumnos/PaginaAdminAlumnos';
import Registro from './components/Registro/Registro';
import LoginUsuario from './components/LoginUsuario/LoginUsuario';
import LoginAdmin from './components/LoginAdmin/LoginAdmin';
import AgregarCursoUsuario from './components/AgregarCursoUsuario/AgregarCursoUsuario';
import DetalleCurso from './components/DetalleCurso/DetalleCurso';
import DetalleCursoUsuario from './components/DetalleCursoUsuario/DetalleCursoUsuario';
import CatalogoCursos from './components/CatalogoCursos/CatalogoCursos';
import CrearRutaAdmin from './components/CrearRutaAdmin/CrearRutaAdmin';
import ModificarRutaAdmin from './components/ModificarRutaAdmin/ModificarRutaAdmin';
import SubirCurso from './components/SubirCurso/SubirCurso';


// Rutas (Agrega, remueve o modifica la ruta que deseas)
const router = createBrowserRouter([
  {
    path: "/alumnos-admin",
    element: <PaginaAdminAlumnos />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/login",
    element: <LoginUsuario />,
  },
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/agregar-curso",
    element: <AgregarCursoUsuario />,
  },
  {
    path: "/detalle-curso",
    element: <DetalleCurso />,
  },
  {
    path: "/detalle-curso-usuario",
    element: <DetalleCursoUsuario />,
  },
  {
    path: "/catalogo-cursos",
    element: <CatalogoCursos />,
  },
  {
    path: "/crear-ruta-admin",
    element: <CrearRutaAdmin />,
  },
  {
    path: "/modificar-ruta-admin",
    element: <ModificarRutaAdmin />,
  },
  {
    path: "/subir-curso",
    element: <SubirCurso />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
