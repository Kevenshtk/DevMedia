"use client";
import Topo from "@/components/Topo";
import SecaoBanner from "@/components/SecaoBanner";
import SecaoExperiencia from "@/components/SecaoExperiencia";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <>
      <Topo />
      <main>
        <SecaoBanner />
        <SecaoExperiencia />
      </main>
      <Rodape />
    </>
  );
}
