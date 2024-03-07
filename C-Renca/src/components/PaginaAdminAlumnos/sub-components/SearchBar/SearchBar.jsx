import './SearchBar.scss';
import { useState, useEffect, useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
    const [{adminTheme, adminThemeTwo, adminThemeThree, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    // Seteo de estado
    const [usuarios, setUsuarios] = useState([]);
    const [search, setSearch] = useState('');

    // Consumir API
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/usuarios');
                setUsuarios(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUsers();
    }, []);

    // Función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value);
    }

    // Filtrado Ternario
    const result = !search ? usuarios : usuarios.filter((usuario) => usuario.nombre.toLowerCase().includes(search.toLowerCase()));

    // Función para guardar el usuario seleccionado en localStorage
    const guardarUsuarioLocalStorage = (usuario) => {
        localStorage.setItem('usuarioSeleccionado', JSON.stringify(usuario));
        console.log('Usuario guardado en localStorage: ', usuario);
    }

    return (
        <div className="search-container">
            <br />
            <h1>Alumnos C-Renca</h1>
            <input value={search} onChange={searcher} type="text" placeholder="Buscar Alumno..." className="form-control" />
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th style={{backgroundColor: toggleTheme ? adminThemeThree.backgroundColor : adminThemeThree.color}}>Nombre</th>
                        <th style={{backgroundColor: toggleTheme ? adminThemeThree.backgroundColor : adminThemeThree.color}}>Nombre de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map((usuario) => (
                        <tr key={usuario._id} onClick={() => guardarUsuarioLocalStorage(usuario)}>
                            <td>
                                <Link to="/perfil-alumno" className='link-alumno'>
                                    {usuario.nombre} {usuario.apellido}
                                </Link>
                            </td>
                            <td>
                                <Link to="/perfil-alumno" className='link-alumno'>
                                    {usuario.correo}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Search;
