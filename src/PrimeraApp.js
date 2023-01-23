//import { Fragment } from "react";

import React from "react";
import PropTypes from 'prop-types';

// fragment es una opcion pero no la buena.

const PrimeraApp = ({nombre, apellido}) => {
    const saludo = "";

    return (
        // <Fragment>    
        //     <h1>Hola mundo</h1>
        //     <h2>subtitulo</h2>
        // </Fragment>

        //<></> esto es una simplicación de la etiqueta fragment 
        <>  
        <h1>Hola {nombre} {apellido}</h1>
        <h2>subtitulo</h2>
        </>

    )
}
// para hacer obligatorio los requerimientos (aun así no bloquea la app)
PrimeraApp.propTypes = {
    nombre: PropTypes.string.isRequired
}
// si no nos pasan el apellido poner uno por defecto
PrimeraApp.defaultProps={
    apellido: 'sinApellido'
}

export default PrimeraApp;