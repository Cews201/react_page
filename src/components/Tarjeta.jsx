import React from "react";
import PropTypes from 'prop-types'

function Tarjeta({titulo,parrafo}){
    return(
        <>
            <h1>{titulo}</h1>
            <p>{parrafo}</p>
        </>
        )
}

Tarjeta.propTypes={
    titulo: PropTypes.string,
    parrafo: PropTypes.string
}
export default Tarjeta;