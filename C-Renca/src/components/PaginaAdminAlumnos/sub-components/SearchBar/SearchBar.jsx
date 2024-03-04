import './SearchBar.scss';
import { useState, useEffect, useContext } from 'react';
import { ThemeContextUser } from '../../../../context/ThemeContextUser';
import { Link } from 'react-router-dom';

const Search = () => {
    const [{adminTheme, adminThemeTwo, adminThemeThree, isDark}, toggleTheme] = useContext(ThemeContextUser); // Dark Mode

    // Seteo de estado
    const [ users, setUsers ] = useState([]);
    const [ search, setSearch ] = useState('');

    // Consumir ApI
    const url = 'https://jsonplaceholder.typicode.com/users';
    const showUsers = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setUsers(data);
    }

    // Función de búsqueda
    const searcher = (e) => {
        setSearch(e.target.value);
        console.log(e.target.value);
    }

    // Filtrado Ternario
    const result = !search ? users : users.filter((unit) => unit.name.toLowerCase().includes(search.toLocaleLowerCase()));

    // useEffect
    useEffect(() => {
        showUsers();
    }, []);

    return (
        <div className="search-container">
            
            <br />

            <h1>Alumnos C-Renca</h1>
            {/* Input */}
            <input value={search} onChange={searcher} type="text" placeholder="Buscar Alumno..." className="form-control" />

            {/* Tabla */}
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th style={{backgroundColor: toggleTheme ? adminThemeThree.backgroundColor : adminThemeThree.color}}>Nombre</th>
                        <th style={{backgroundColor: toggleTheme ? adminThemeThree.backgroundColor : adminThemeThree.color}}>Nombre de Usuario</th>
                    </tr>
                </thead>
                <tbody>
                    { result.map( (user) => (
                        <tr key={user.id}>
                            <td><Link to="/perfil-alumno" className='link-alumno'>{user.name}</Link></td>
                            <td><Link to="/perfil-alumno" className='link-alumno'>{user.username}</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Search;
