'use client'
import { useState } from "react";
import estilos from "./page.module.css";
import Image from "next/image";
import Logo from "../../public/barbearia.png";
import Banner from '../../public/banner.jpg';
import { FiSun, FiMoon } from "react-icons/fi";

export default function Home() {
  const [alterar, setalterar] = useState(false);

  function mudarTema(){
    setalterar(!alterar);
  }

  return (
    <div className={alterar ? estilos.temaDark : estilos.temaLight}>
      <header className={estilos.header}>
            <div className={estilos.topo}>
                <Image className={estilos.logo} src={Logo} alt="Logo"/>
                <button className={estilos.btn} onClick={mudarTema}>{alterar ? <FiSun/> : <FiMoon/>}</button>
            </div>
      </header>

      <main>
        <section className={estilos.banner}>
          <Image src={Banner} alt='banner' />
        </section>

        <section className={estilos.secaoConteudo}>
          <dev className={estilos.conteudo}>
            <h1>Bem-vindo a Barber Shop</h1>
            <p className={estilos.paragrafoDestaque}>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
            <p className={estilos.paragrafo}>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
            <p className={estilos.assinatura}>S. Kelly</p>
          </dev>
        </section>
    </main>
    </div>
  );
}