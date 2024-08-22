import estilos from './Card.module.css';
import Image from 'next/image';

import { FaFire, FaWater } from "react-icons/fa";
import { MdAir } from "react-icons/md";
import { PiPlant } from "react-icons/pi";

export default function Card({signo, elemento, imagem, dataInicio, dataFim}) {
    return (
      <div className={
        elemento === "Agua" ? estilos.card_signo_agua
      : elemento === "Fogo" ? estilos.card_signo_fogo
      : elemento === "Terra" ? estilos.card_signo_terra
      : elemento === "Ar" && estilos.card_signo_ar
      }>

        <div className={estilos.titulo_icone}>
          <h3>{signo}</h3>
          {elemento === "Agua" ? (<FaWater className={estilos.icone}/>)
          : elemento === "Fogo" ? (<FaFire className={estilos.icone}/>)
          : elemento === "Terra" ? (<PiPlant className={estilos.icone}/>)
          : elemento === "Ar" && (<MdAir className={estilos.icone} />)}
        </div>
        <Image src={imagem} alt={signo}/>
        <span>{dataInicio} - {dataFim}</span>
      </div>
    );
  }