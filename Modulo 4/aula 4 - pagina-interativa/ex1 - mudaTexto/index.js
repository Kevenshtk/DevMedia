'use client';
import { useState } from 'react';

export default function Home() {
  const [mensagem, setMensagem] = useState('O React é uma biblioteca do JavaScript.');

  function alterarMensagem(){
    setMensagem("O React é um framework utilizado em aplicações web.");
  }

  return (
    <div>
    <p>{mensagem}</p>
    <button onClick={alterarMensagem}>Clique aqui</button>
  </div>
  );
}