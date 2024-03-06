import './styles/App.scss';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from './context/ThemeContextUser';
// Ruteo de páginas
import Home from './components/Home/Home';
import PaginaAdminAlumnos from './components/PaginaAdminAlumnos/PaginaAdminAlumnos';
import PerfilAlumno from './components/PerfilAlumno/PerfilAlumno';
import Registro from './components/Registro/Registro';
import LoginUsuario from './components/LoginUsuario/LoginUsuario';
import LoginAdmin from './components/LoginAdmin/LoginAdmin';
import AdminHome from './components/AdminHome/AdminHome';
import PerfilUsuario from './components/PerfilUsuario/PerfilUsuario';
import Categorias from './components/Categorias/Categorias';
import AgregarCursoUsuario from './components/AgregarCursoUsuario/AgregarCursoUsuario';
import DetalleCurso from './components/DetalleCurso/DetalleCurso';
import DetalleCursoUsuario from './components/DetalleCursoUsuario/DetalleCursoUsuario';
import CatalogoCursos from './components/CatalogoCursos/CatalogoCursos';
import CrearCategoriaAdmin from './components/CrearCategoriaAdmin/CrearCategoriaAdmin';
import ModificarCategoriaAdmin from './components/ModificarCategoriaAdmin/ModificarCategoriaAdmin';
import SubirCurso from './components/SubirCurso/SubirCurso';
import VerCategoriaAdmin from './components/VerCategoriaAdmin/VerCategoriaAdmin';
import SubirCategoriaAdmin from './components/SubirCategoriaAdmin/SubirCategoriaAdmin';
import ModificarCursoAdmin from './components/ModificarCursoAdmin/ModificarCursoAdmin';


// Rutas (Agrega, remueve o modifica la ruta que deseas)
const router = createBrowserRouter([
  
  // Vistas de Usuario
  {
    path: "/",
    element: <Home />,
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
    path: "/perfil-usuario",
    element: <PerfilUsuario />,
  },
  {
    path: "/agregar-curso",
    element: <AgregarCursoUsuario />,
  },
  {
    path: "/detalle-curso-usuario",
    element: <DetalleCursoUsuario />,
  },

  // Vistas de Administrador
  {
    path: "/login-admin",
    element: <LoginAdmin />,
  },
  {
    path: "/home-admin",
    element: <AdminHome />,
  },
  {
    path: "/alumnos-admin",
    element: <PaginaAdminAlumnos />,
  },
  {
    path: "/perfil-alumno",
    element: <PerfilAlumno />,
  },
  {
    path: "/categorias",
    element: <Categorias />,
  },
  {
    path: "/detalle-curso",
    element: <DetalleCurso />,
  },
  {
    path: "/catalogo-cursos",
    element: <CatalogoCursos />,
  },
  {
    path: "/crear-categoria-admin",
    element: <CrearCategoriaAdmin />,
  },
  {
    path: "/modificar-categoria-admin",
    element: <ModificarCategoriaAdmin />,
  },
  {
    path: "/ver-categoria-admin",
    element: <VerCategoriaAdmin />,
  },
  {
    path: "/subir-categoria-admin",
    element: <SubirCategoriaAdmin />,
  },
  {
    path: "/subir-curso",
    element: <SubirCurso />,
  },
  {
    path: "/modificar-curso",
    element: <ModificarCursoAdmin />,
  },
]);

function App() {

  return (
    <>
        <ThemeProvider>
          <RouterProvider router={router} />
        </ThemeProvider>
    </>
  )
}

export default App
