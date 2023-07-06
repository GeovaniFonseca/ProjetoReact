import React, { useState } from 'react';
import './formulario.css';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nome:', nome);
    console.log('Email:', email);
  };

  return (
    <div className='container-form'>
      <div className='item'>
          <h3>Telefone</h3>
          <p>55(48) 99999-9999</p>
          <h3>Endereço</h3>
          <p>Rua Lorem Ipsum, 256</p>
      </div>
      <div className='item'>
        <form onSubmit={handleSubmit}>
            <div>
              <h2>Contato</h2>
              <p>Lorem ipsum dolor sit amet.</p>
              <label htmlFor="nome">Nome:</label>
              <br />
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br />
              <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div>
              <label htmlFor="texto">Assunto:</label><br />
              <input type="text" name="text" id="text" value={text} 
              onChange={(event) => setText(event.target.value)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
      </div>
    </div>
  );
};

export default Formulario;

