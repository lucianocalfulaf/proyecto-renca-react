import './SearchBar.scss';
import { useState, useEffect } from 'react';

const Search = () => {

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

            <h1>Filtro de Búsqueda de Alumnos</h1>
            {/* Input */}
            <input value={search} onChange={searcher} type="text" placeholder="search" className="form-control" />

            {/* Tabla */}
            <table className='table table-striped table-hover mt-5 shadow-lg'>
                <thead>
                    <tr className='bg-curso text-white'>
                        <th>Name</th>
                        <th>User Name</th>
                    </tr>
                </thead>
                <tbody>
                    { result.map( (user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Search;
