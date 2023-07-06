import React, {useState, useEffect} from 'react'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Home from './componentes/home';
import Produtos from './componentes/produtos';
import Formulario from './componentes/formulario';
import Informacoes from './componentes/informacoes';


const App = () => {
  return (
    <div className = "App">
      <Header />
      <Home />
      <Informacoes />
      <Produtos />
      <Formulario />
      <Footer />
    </div>
  );
};

export default App;
