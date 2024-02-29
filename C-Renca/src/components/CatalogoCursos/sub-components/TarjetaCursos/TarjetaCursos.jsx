import './TarjetaCursos.css';
import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function TarjetaCursos() {
  // Captura los datos de la base de datos
  const [cursos, setCursos] = useState([]);
  const [filtros, setFiltros] = useState([]); // Agrega un estado para los filtros

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/cursos");
        setCursos(response.data);
        // Extrae los valores únicos de la propiedad 'filtro' de los cursos
        const uniqueFiltros = [...new Set(response.data.map(curso => curso.filtro))];
        setFiltros(uniqueFiltros);
      } catch (error) {
        console.error('Hubo un problema al obtener los cursos:', error);
      }
    };

    fetchData();
  }, []);

  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos'); // Cambia el estado de selectedCategory a selectedFilter

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

  return (
    <div className="container-fluid">
      <div className="row mb-12">
        <div className="col-4-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar curso..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      
        <div className="col-4-md-6">
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
          <div key={curso._id} className='col-4 mx-auto'>
            <div className='card' style={{ maxWidth: '18rem', maxHeight: '30rem'}}>
                <img src={curso.imagen?.url} alt={curso.nombreCurso} className='card-img-top' />
                <div className='card-body '>
                <Link to={`/curso/${curso._id}`}>
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

export default TarjetaCursos;
