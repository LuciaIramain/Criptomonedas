import React, { Fragment, useState } from 'react'

const useMoneda = () => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState('');
    
    // Interfaz, es lo que se va a mostrar en pantalla
    const Seleccionar = () => (
        <Fragment>
            <label>Moneda</label>
            <select>
                <option value="MXN">Peso Mexicano</option>
            </select>
        </Fragment>
    )
    
    // Retornar state(devulve la moneda que selecciona el usuario), interfaz y fn que modifica el state
    // El orden en el que los retorno es IMPORTANTE para asignarle el nombre a las variables
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;