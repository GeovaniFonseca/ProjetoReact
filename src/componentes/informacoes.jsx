import React from "react";
import './informacoes.css';
import predio1 from './imagens/predio1.jpg';
import predio2 from './imagens/predio2.jpg';
import predio3 from './imagens/predio3.jpg';
import predio4 from './imagens/predio4.jpg';


const Informacoes = () => {
    return (
        <div className="container">
           <h1 id="informacoes">Informações</h1>
           <div className="">
                <img src={predio1} alt="predio1" className="image" />
                <img src={predio2} alt="predio2" className="image" />
                <img src={predio3} alt="predio3" className="image" />
                <img src={predio4} alt="predio4" className="image" />
                
                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
                    tortor et tincidunt rhoncus. Nulla nec ligula finibus, porta nunc
                    vitae, consectetur ligula. Nullam eu magna vestibulum, rutrum orci at,
                    facilisis purus. Integer non pharetra massa. Donec sodales nibh et
                    purus tincidunt, eget laoreet velit mollis. Vivamus laoreet justo in
                    nunc varius rhoncus.</p>
                </div>
           </div>
        </div>
    );
};

export default Informacoes;