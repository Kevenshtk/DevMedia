'use client';
import { useState } from 'react';
import estilos from './page.module.css';
import Menu from '@/componentes/Menu';
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);

  const atualizarState = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <main className={estilos.container}>
      <header className={estilos.topo}>
        <button className={estilos.botao} onClick={atualizarState}>
          {menuAberto ? <IoMdClose/> : <CiMenuBurger/>}
        </button>
      </header>

      {menuAberto && (
        <Menu />
      )}
    </main>
  );
}
