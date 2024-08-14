'use client';
import estilos from "@/styles/Home.module.css"
import { useState } from 'react';

export default function Home() {

  const fundoVermelho = estilos.bg_vermelho;
  const fundoAzul = estilos.bg_azul;

  const [corAlterada, setCorAlterada] = useState(false);

  function alterarEstilo() {
    setCorAlterada(!corAlterada);
  }

  return (
    <main className={estilos.main}>
      <div className={estilos.container}>
        <h2>Alterando estilo do elemento</h2>
        <div className={corAlterada ? fundoAzul : fundoVermelho}></div>
        <p>Clique no botão para alterar o estilo do elemento acima.</p>
        <button onClick={alterarEstilo}>Alterar</button>
      </div>
    </main>
  );
}