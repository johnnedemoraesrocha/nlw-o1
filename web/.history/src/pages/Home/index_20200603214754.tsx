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
                
            </div>
        </div>
    )
}
export default Home;