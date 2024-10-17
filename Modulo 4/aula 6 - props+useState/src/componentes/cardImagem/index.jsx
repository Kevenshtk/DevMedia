import estilos from "./cardImagem.module.css"
import Image from "next/image";

import imgGato from "@/../public/gato.jpg";
import imgCachorro from "@/../public/cachorro.jpg";

export default function cardImagem(props){
    return(
        <div className={estilos.cardImage}>
            <Image className={estilos.image} src={props.imageAnimal === "cachorro" ? imgCachorro:imgGato} alt="Imagem animal"/>
        </div>
    );
}