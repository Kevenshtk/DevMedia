import Image from "next/image";
import estilos from './ItemJogos.module.css';
import xboxLogo from '/public/xbox-logo.png';
import playstationLogo from '/public/playstation-logo.jpg';
import nintendoLogo from '/public/nintendo-logo.jpg';

export default function ItemJogos(props){
    return(
        <div className={estilos.card}>
            <figure>
                <Image src={props.plataforma == "xbox" ? xboxLogo :
                props.plataforma == "playstation" ? playstationLogo :
                nintendoLogo} alt="logo"/>
            </figure>
            <div>
                <p>{props.nome}</p>
            </div>
        </div>
    )
}