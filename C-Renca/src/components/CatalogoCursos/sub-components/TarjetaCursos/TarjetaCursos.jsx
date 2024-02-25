import './TarjetaCursos.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom

function TarjetaCursos() {
  // Captura los datos de la base de datos
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/cursos");
        setCursos(response.data);
      } catch (error) {
        console.error('Hubo un problema al obtener los cursos:', error);
      }
    };

    fetchData();
  }, []);

  // Filtros
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCursos = cursos.filter((curso) => {
    return (
      curso.nombreCurso.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'Todos' || curso.filtro === selectedCategory)
    );
  });

  return (
    
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-12">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar curso..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      
        <div className="col-md-12">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Todos">Todos</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Metodologia">Metodología</option>
            <option value="Diseño">Diseño</option>
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
