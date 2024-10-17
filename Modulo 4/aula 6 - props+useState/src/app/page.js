'use client'
import {useState} from "react";
import estilos from "./page.module.css";

import Topo from "@/componentes/topo"
import CardImagem from "@/componentes/cardImagem";
import CardInfo from "@/componentes/cardInfo";


export default function Home(){
  const[tipoAnimal, setTipoAnimal] = useState("cachorro");

  function mudarAnimal(){
    tipoAnimal == "cachorro" ? setTipoAnimal("gato") : setTipoAnimal("cachorro");
  }

  return(
    <div>
      <Topo funcaoBotao={mudarAnimal}/>
      <main className={estilos.secaoPrincipal}>
        <CardImagem imageAnimal={tipoAnimal}/>
        <CardInfo tipoAnimal={tipoAnimal}/>
      </main>
    </div>
  );
}