import React from 'react';

import './home.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta" />
                </header>
                
                <main>
                    <h1>Seu marketplace de coleta de resíduos</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</p>
                </main>

                <a href="/cadastro">
                    <span>

                    </span>
                    <strong>Cadastre um ponto de coleta</strong>
                </a>

            </div>
        </div>
    )
}
export default Home;