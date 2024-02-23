import './TarjetaCursos.css';
import { useState } from 'react';

function TarjetaCursos() {
  const cursos = {
    data: [
      {
        cursoName: "Curso Desarrollo Web",
        category: "Tecnologia",
        duration: "20hrs",
        image: "./src/assets/curso.jpg",
      },
      {
        cursoName: "Curso Creative",
        category: "Tecnologia",
        duration: "10hrs",
        image: "./src/assets/aprendizaje.jpg",
      },
      {
        cursoName: "Curso Diseño Mockup",
        category: "Tecnologia",
        duration: "10hrs",
        image: "./src/assets/curso.jpg",
      },
      {
        cursoName: "Curso Metologias Agiles",
        category: "Metodologia",
        duration: "15hrs",
        image: "./src/assets/aprendizaje.jpg",
      },
      {
        cursoName: "Curso Diseño Web",
        category: "Diseño",
        duration: "20hrs",
        image: "./src/assets/curso.jpg",
      },
      {
        cursoName: "Curso Programacion",
        category: "Tecnologia",
        duration: "30hrs",
        image: "./src/assets/aprendizaje.jpg",
      },
      
    ],
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredCursos = cursos.data.filter((curso) => {
    return (
      curso.cursoName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'Todos' || curso.category === selectedCategory)
    );
  });

  return (
    <div className="container">
      <div className="row mb-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Buscar curso..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="Todos">Todos</option>
            <option value="Tecnologia">Tecnología</option>
            <option value="Metodologia">Metodología</option>
            <option value="Diseño">Diseño</option>
            {/* Agrega más opciones de categorías si es necesario */}
          </select>
        </div>
      </div>
      <div className="row">
        {filteredCursos.map((curso, index) => (
          <div key={index} className={`col-md-4 mb-4 ${curso.category}`}>
            <div className="card">
              <img src={curso.image} className="card-img-top" alt={curso.cursoName} />
              <div className="card-body">
                <h5 className="card-title">{curso.cursoName}</h5>
                <p className="card-text">Duración: {curso.duration}</p>
                <p className="card-text">Categoría: {curso.category}</p>
                {/* Agrega aquí cualquier otra información adicional que desees mostrar */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TarjetaCursos;