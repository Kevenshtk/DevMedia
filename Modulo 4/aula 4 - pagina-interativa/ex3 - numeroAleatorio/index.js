'use client';
import { useState } from 'react';
import estilos from "@/styles/Home.module.css"

export default function Home() {
  const [result, setresult] = useState(0);

  const retornaNumero = () => {
    const novoNumero = Math.floor(Math.random() * (100 - 1) + 1);
    setresult(novoNumero);
  };

  return (
    <main className={estilos.main}>
      <div>
        <h1>Número Aleatório</h1>
        <h2>{result}</h2>
        <p>Click no botão abaixo para gerar um número aleatório</p>
        <button onClick={retornaNumero}>Gerar número</button>
      </div>
    </main>
  );
}