"use client";
import Topo from "@/components/Topo";
import SecaoBanner from "@/components/SecaoBanner";
import SecaoExperiencia from "@/components/SecaoExperiencia";
import Rodape from "@/components/Rodape";
import { useState } from "react";

export default function Home() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  function altertarTema() {
    setTemaEscuro(!temaEscuro);
  }

  return (
    <>
      <Topo onClick={altertarTema} temaEscuro={temaEscuro} />
      <main>
        <SecaoBanner />
        <SecaoExperiencia temaEscuro={temaEscuro} />
      </main>
      <Rodape temaEscuro={temaEscuro} />
    </>
  );
}
