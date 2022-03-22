import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display:block;
`;

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearence:none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useMoneda = (label, stateInicial, opciones) => {

    //State de nuestro custom hook
    const [state, actualizarState] = useState(stateInicial);
    
    // Interfaz, es lo que se va a mostrar en pantalla
    const Seleccionar = () => (
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange={e => actualizarState(e.target.value)} //toma lo que selecciona el usuario
                value={state} //lo uso para que se vaya cambiando si el usuario marca otra opción
            >
                <option value="">-- Seleccione --</option>
                {opciones.map(opcion => (
                    <option value={opcion.codigo} key={opcion.codigo}>{opcion.nombre}</option>
                ))}
            </Select>
        </Fragment>
    )
    
    // Retornar state(devulve la moneda que selecciona el usuario), interfaz y fn que modifica el state
    // El orden en el que los retorno es IMPORTANTE para asignarle el nombre a las variables
    return [state, Seleccionar, actualizarState];
}

export default useMoneda;