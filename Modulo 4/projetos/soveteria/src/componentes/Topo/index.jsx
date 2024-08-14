import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.png";
import estilos from "./Topo.module.css";

export default function Topo(){
    return(
        <header className={estilos.topo}>
            <div className={estilos.limitarSecao}>
                <Image className={estilos.logo} src={Logo} alt="Imagem Logo"/>
                <nav className={estilos.containerLinks}>
                    <Link className={estilos.link} href="/">Home</Link>
                    <Link className={estilos.link} href="/sabores">Sabores</Link>
                    <Link className={estilos.link} href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
}