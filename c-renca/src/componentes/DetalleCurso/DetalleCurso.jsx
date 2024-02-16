import React from 'react';
import './DetalleCurso.css';
import InfoGeneral from './InfoGeneral/InfoGeneral.jsx';
import BotonesModificar from './BotonesModificar/BotonesModificar.jsx';
import Acordeon from './Acordeon/Acordeon.jsx';
import AlumnosEnCurso from './AlumnosEnCurso/AlumnosEnCurso.jsx';
{/*import Navbar from '/components/Navbar/components/Container'*/}
import 'bootstrap/dist/css/bootstrap.min.css';

const DetalleCurso = () => {

    return (
        <>
          {/*<Navbar />*/}
            <div className="top-row">
                <InfoGeneral />
                <BotonesModificar/>
            </div>
            <div className="bottom-row">
                <Acordeon />
                <AlumnosEnCurso />
            </div>
            
        </>
    );
}

export default DetalleCurso;





