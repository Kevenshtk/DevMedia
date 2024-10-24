import estilos from "./topo.module.css";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function Topo(props){
    return(
        <header className={!props.temaEscuro ? estilos.topoLight : estilos.topoDark}>
            <Image className={estilos.logo} src={Logo} alt="logo"/>
            <button className={!props.temaEscuro ? estilos.btnLight : estilos.btnDark} onClick={props.acao_onClick}>{!props.temaEscuro ? <MdDarkMode className={estilos.icon} size={25}/> : <MdLightMode className={estilos.icon} size={25}/>}</button>
        </header>
    );
}