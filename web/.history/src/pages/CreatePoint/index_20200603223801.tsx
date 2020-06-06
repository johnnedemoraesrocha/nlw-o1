import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons';

import './CreatePoint.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"></img>
                <Link to="/">
                    Voltar para home
                </Link>
            </header>
        </div>
    )
}

export default CreatePoint;