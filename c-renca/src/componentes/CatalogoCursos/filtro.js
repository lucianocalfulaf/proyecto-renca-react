//Busqueda Filtro
document.getElementById('searchInput').addEventListener('input', function () {
  const filter = this.value.toLowerCase();
  const courseList = document.getElementsByClassName('course-link');

  // Itera sobre los elementos y muestra/oculta según la coincidencia con el filtro
  Array.from(courseList).forEach(function (course) {
      const titleText = course.innerText.toLowerCase();
      const card = course.closest('.card');

      if (titleText.includes(filter)) {
          card.classList.remove('hidden');
      } else {
          card.classList.add('hidden');
      }
  });
  updateCardLayout();
});

//Update Card Layout
function updateCardLayout() {
  const courseRow = document.getElementById('courseRow');
  const visibleCards = courseRow.querySelectorAll('.card:not(.hidden)');

  if (visibleCards.length > 0) {
      const columns = Math.ceil(12 / visibleCards.length); // Distribuir en 12 columnas Bootstrap
      const newClass = `col-${columns}`;

      visibleCards.forEach(function (card) {
          card.className = card.className.replace(/col-\d+/, newClass);
      });
  }
}

//Boton filtro
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

//FILTROOO
document.getElementById('filterButton').addEventListener('click', function () {
  const filterSection = document.getElementById('filterSection');

  // Si la sección de filtros está visible, la oculta; de lo contrario, la muestra
  filterSection.style.display = filterSection.style.display === 'none' ? 'block' : 'none';
});


//Busqueda Boton Filtro

        document.getElementById('filterButton').addEventListener('click', function () {
            const overlay = document.getElementById('overlay');
            const filterSection = document.getElementById('filterSection');
            
            overlay.style.display = 'block';
            filterSection.style.display = 'block';
        });

        document.getElementById('overlay').addEventListener('click', function () {
            const overlay = document.getElementById('overlay');
            const filterSection = document.getElementById('filterSection');

            overlay.style.display = 'none';
            filterSection.style.display = 'none';
        });

        document.getElementById('modalidadDropdown').addEventListener('change', applyFilters);
        document.getElementById('seccionDropdown').addEventListener('change', applyFilters);

        document.getElementById('limpiarFiltros').addEventListener('click', function () {
            document.getElementById('modalidadDropdown').value = 'Todos';
            document.getElementById('seccionDropdown').value = 'Todos';
            applyFilters();
        });

        function applyFilters() {
            const modalidadFilter = document.getElementById('modalidadDropdown').value;
            const seccionFilter = document.getElementById('seccionDropdown').value;

            const cards = document.getElementsByClassName('card');

            Array.from(cards).forEach(function (card) {
                const cardModalidad = card.getAttribute('data-modalidad');
                const cardSeccion = card.getAttribute('data-seccion');

                if ((modalidadFilter === 'Todos' || cardModalidad === modalidadFilter) &&
                    (seccionFilter === 'Todos' || cardSeccion === seccionFilter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        }

