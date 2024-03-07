import './TarjetaCursosUsuarios.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function TarjetaCursosUsuarios() {
  const [cursos, setCursos] = useState([]);
  const [filtros, setFiltros] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/cursos");
        setCursos(response.data);
        const uniqueFiltros = [...new Set(response.data.map(curso => curso.filtro))];
        setFiltros(uniqueFiltros);
      } catch (error) {
        console.error('Hubo un problema al obtener los cursos:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredCursos = cursos.filter((curso) => {
    return (
      curso.nombreCurso.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedFilter === 'Todos' || curso.filtro === selectedFilter)
    );
  });

  //localstorage
  const guardarCursoLocalStorage = (curso) => {
    localStorage.setItem('cursoSeleccionado', JSON.stringify(curso));
    console.log('Curso guardado en localStorage:', curso);
  }

  return (
    <div className="container-fluid">
      <div className="row mb-12">
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar curso..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-7">
          <select
            className="form-select"
            value={selectedFilter}
            onChange={handleFilterChange}
          >
            <option value="Todos">Todos</option>
            {filtros.map((filtro, index) => (
              <option key={index} value={filtro}>{filtro}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredCursos.map((curso, index) => (
          <div key={curso._id} onClick={() => guardarCursoLocalStorage(curso)} className='col-4 col-md-6 col-sm-12 col-lg-5'>
            <div className='card' style={{ maxWidth: '18rem', maxHeight: '30rem'}}>
              <img src={curso.imagen?.url} alt={curso.nombreCurso} className='card-img-top' />
              <div className='card-body '>
                <Link to={`/detalle-curso-usuario`}>
                  <h5 className='card-title '>{curso.nombreCurso}</h5>
                </Link>
                <p className='card-text'>Filtro: {curso.filtro}</p>
                <p className='card-text'>Duración: {curso.duracion} hrs</p>
                <p className='card-text'>Profesor a Cargo: {curso.profesor}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TarjetaCursosUsuarios;
