'use client'
import Image from "next/image";
import estilos from "./page.module.css";
import Lupa from "/public/lupa.png";
import ItemJogos from "./componentes/ItemJogos";
import { useState } from "react";
import { filtrarJogo, buscarJogo, retornarJogos } from './servico/index';

export default function Home() {

  const [ListaJogos, setListaJogos] = useState(retornarJogos);
  const [textoBusca, setTextoBusca] = useState("");

  const buscarPorPlataforma = (plataforma) => {
    setListaJogos(filtrarJogo(plataforma));
    setTextoBusca("");
  }

  const limparFiltro = () => {
    setListaJogos(retornarJogos());
    setTextoBusca("");
  }

  const bustarJogos = (textoDigitado) => {
    setTextoBusca(textoDigitado);
    setListaJogos(buscarJogo(textoDigitado));
  }


  return (
    <div className={estilos.container_principal}>
      <h2>Lista de Jogos Exclusivos</h2>
      <div className={estilos.container_btns}>
      <button onClick={() => buscarPorPlataforma("xbox")}>xbox</button>
      <button onClick={() => buscarPorPlataforma("playstation")}>playstation</button>
      <button onClick={() => buscarPorPlataforma("nintendo")}>nintendo</button>
      <button onClick={() => limparFiltro()}>Limpar Filtro</button>
      </div>
      <div className={estilos.container_input}>
        <Image src={Lupa} alt="icone"/>
        <input type="text" value={textoBusca}
        onChange={(event) => bustarJogos(event.target.value)}
        placeholder="Pesquisar por um jogo"/>
      </div>
      <div className={estilos.container_cards}>
        {ListaJogos.map((jogo) => (
          <ItemJogos key={jogo.id} nome={jogo.nome} plataforma={jogo.plataforma}/>
        ))}
      </div>
    </div>
  );
}