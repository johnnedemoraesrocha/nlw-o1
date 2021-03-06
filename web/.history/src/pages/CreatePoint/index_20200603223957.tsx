import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './CreatePoint.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
    return (
        <div id="page-create-point">
            <header>
                <img src={logo} alt="Ecoleta"></img>
                <Link to="/">
                    <FiArrowLeft />
                    Voltar 
                </Link>
            </header>

            <form>
                <h1>Cadastro do <br> ponto de coleta</h1>
            </form>

        </div>
    )
}

export default CreatePoint;