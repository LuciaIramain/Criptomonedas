import React from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #326AC0;
        cursor: pointer;
    }
`;

const Formulario = () => {

    // Utilizar useMoneda, le puedo cambiar el nombre y funciona igual
    const [ moneda, SelectMonedas, actualizarState ] = useMoneda();

    return (
        <div>
            <form>
                <SelectMonedas />
                <Boton
                    type='submit'
                    value='calcular'
                >

                </Boton>
            </form>
        </div>
    );
};

export default Formulario;