import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Home from './pages/Home';

function App() {

  return (
    <div>
      <Header title="Titulo Header" />
      <h1>Conteúdo da Aplicação</h1>
    </div>
  );
}

export default App;
