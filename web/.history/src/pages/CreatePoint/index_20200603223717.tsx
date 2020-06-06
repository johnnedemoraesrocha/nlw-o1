import React from 'react';
import { Link } from 'react-router-dom';

import './CreatePoint.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"></img>
                <Link to="/">
                    Voltar para a PG Inicial
                </Link>
            </header>
        </div>
    )
}

export default CreatePoint;