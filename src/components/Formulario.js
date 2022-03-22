import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
import axios from 'axios';
import Error from './Error';

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

    // state del listado de criptomonedas
    const [listacripto, guardarCriptomoneda] = useState([]);
    const [ error, guardarError ] = useState(false);

    const MONEDAS = [
        {codigo: 'ARG', nombre: 'Peso Argentino'},
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'GBP', nombre: 'Libra Esterlina'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'}
    ]

    // Utilizar useMoneda, le puedo cambiar el nombre y funciona igual, y no hace fakta utilizar todos
    const [ moneda, SelectMonedas ] = useMoneda('Elige tu moneda', '', MONEDAS);

    // Utilizar useCriptomoneda
    const [ criptomoneda, SelectCripto ] = useCriptomoneda('Elige tu criptomoneda', '', listacripto);

    useEffect(()=> {
        const consultarAPI = async () => {
            const URL = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const resultado = await axios.get(URL);
            guardarCriptomoneda(resultado.data.Data);
        }
        consultarAPI();
    }, []);

    const cotizarMoneda = e => {
        e.preventDefault();

        // Validar si ambos campos estan llenos
        if(moneda === ''|| criptomoneda === '') {
            guardarError(true);
            return;
        }
        // Pasar los datos al componente
        guardarError(false);
    }

    return (
        <div>
            <form onSubmit={cotizarMoneda}>
                {error ? <Error mensaje='Todos los campos son obligatorios' /> : null}
                <SelectMonedas />
                <SelectCripto />
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