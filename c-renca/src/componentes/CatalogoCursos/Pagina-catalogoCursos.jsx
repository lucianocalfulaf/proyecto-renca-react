import React from 'react'
import TarjetaCursos from './TarjetaCursos.jsx'
import Header from '../../../pagina-inicio-admin-react/src/components/navbar/Header.jsx'
import Footer from '../../../pagina-inicio-admin-react/src/components/footer/Footer.jsx'
function PaginaCatalogoCursos() {
    return (
      <div className='grid-container'>
        <Header />
        <TarjetaCursos />
        <Footer />
      </div>
    )
  }

export default PaginaCatalogoCursos