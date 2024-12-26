import Image from "next/image";
import Logo from "../../../public/logo.png";
import Link from "next/link";
import estilos from "@/componentes/Topo/Topo.module.css"

export default function Topo(){
    return(
        <header className={estilos.topo}>
            <Image className={estilos.logo} src={Logo} alt="Logo"/>
            <nav>
                <Link className={estilos.link} href="#SecaoProduto">Produtos</Link>
                <Link className={estilos.link} href="#SecaoSobre">Sobre</Link>
                <Link className={estilos.link} href="#SecaoContato">Contato</Link>
            </nav>
        </header>
    )
}