import React, { Fragment, useState } from 'react'

const useMoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);
    
    // Interfaz, es lo que se va a mostrar en pantalla
    const Seleccionar = () => (
        <Fragment>
            <label>{label}</label>
            <select>
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option value={opcion.codigo} key={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </select>
        </Fragment>
    )
    
    // Retornar state(devulve la moneda que selecciona el usuario), interfaz y fn que modifica el state
    // El orden en el que los retorno es IMPORTANTE para asignarle el nombre a las variables
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;