import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #FFF;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Bebas Neue', cursive;
`;

const Error = ({mensaje}) => {
    return (
        <div>
            <MensajeError>{mensaje}</MensajeError>
        </div>
    );
};

export default Error;
