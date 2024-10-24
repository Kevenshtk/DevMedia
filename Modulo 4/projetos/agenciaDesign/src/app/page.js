'use client'
import Topo from "@/componentes/Topo";
import SecaoBanner from "@/componentes/SecaoBanner";
import SecaoExperiencia from "@/componentes/SecaoExperiencia";
import Rodape from "@/componentes/Rodape";
import { useState } from "react";

export default function Home() {

  const [temaEscuro, setTemaEscuro] = useState(false);
  
  function altertarTema(){
    setTemaEscuro(!temaEscuro);
  }
  
  return (
    <>
      <Topo acao_onClick={altertarTema} temaEscuro={temaEscuro}/>
      <main>
        <SecaoBanner/>
        <SecaoExperiencia temaEscuro={temaEscuro}/>
      </main>
      <Rodape temaEscuro={temaEscuro}/>
    </>
  );
}