import estilos from "./rodape.module.css";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import Facebook from "@/../public/facebook.png";
import Twitter from "@/../public/twitter.png";
import Linkedin from "@/../public/linkedin.png";
import Dribble from "@/../public/dribble.png";
import Behance from "@/../public/behance.png";
import Google from "@/../public/google.png";

export default function Rodape(props){
    return(
        <footer className={!props.temaEscuro ? estilos.rodapeLight : estilos.rodapeDark}>
            <div className={estilos.containerInfo}>
                <Image src={Logo} alt="Logo"/>
                <p>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias,
                   ferramentas e tecnologias personalizadas.</p>
            </div>
            <div className={estilos.containerSocial}>
                <ul className={estilos.iconsSocial}>
                    <li><Image className={estilos.iconSocial} src={Facebook} alt="Logo Facebook"/></li>
                    <li><Image className={estilos.iconSocial} src={Twitter} alt="Logo Twitter"/></li>
                    <li><Image className={estilos.iconSocial} src={Linkedin} alt="Logo Linkedin"/></li>
                    <li><Image className={estilos.iconSocial} src={Dribble} alt="Logo Dribble"/></li>
                    <li><Image className={estilos.iconSocial} src={Behance} alt="Logo Behance"/></li>
                    <li><Image className={estilos.iconSocial} src={Google} alt="Logo Google"/></li>
                </ul>
            </div>
            <div className={!props.temaEscuro ? estilos.containerCopyrightLight : estilos.containerCopyrightDark}>
                <p>Copyright 2024 desenvolvido por <span>Keven</span></p>
            </div>
        </footer>
    );
}