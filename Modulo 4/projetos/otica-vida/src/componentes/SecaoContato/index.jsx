import Image from "next/image";
import iconLocalizacao from "../../../public/local.png";
import iconTelefone from "../../../public/telefone.png";
import iconEmail from "../../../public/email.png";
import iconFacebook from "../../../public/fb.png";
import iconInstagram from "../../../public/ig.png";
import iconTweeter from "../../../public/tt.png";
import estilos from "@/componentes/SecaoContato/SecaoContato.module.css";

export default function SecaoContato(){
    return(
        <section className={estilos.SecaoContato} id="SecaoContato">
            <h3>Fale conosco</h3>
            <p>Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato através de nossas redes sociais ou da central de atendimento.</p>

            <div className={estilos.containerInfo}>
                <div className={estilos.conteudo}>
                    <h4>Nossos Contato</h4>
                    <div>
                        <Image className={estilos.icon} src={iconLocalizacao} alt="Icone Localização"/>
                        <span>Nova Iguaçu, RJ</span>
                    </div>
                    <div>
                        <Image className={estilos.icon} src={iconTelefone} alt="Icone Telefone"/>
                        <span>(21) 9999-9999</span>
                    </div>
                    <div>
                        <Image className={estilos.icon} src={iconEmail} alt="Icone Email"/>
                        <span>contato@oticavida.com</span>
                    </div>
                </div>

                <div className={estilos.conteudo}>
                    <h4>Nossas Redes Sociais</h4>
                    <div>
                        <Image className={estilos.icon} src={iconFacebook} alt="Icone Facebook"/>
                        <span>/OticaVida</span>
                    </div>
                    <div>
                        <Image className={estilos.icon} src={iconInstagram} alt="Icone Instagram"/>
                        <span>@oticavidarj</span>
                    </div>
                    <div>
                        <Image className={estilos.icon} src={iconTweeter} alt="Icone Tweeter"/>
                        <span>@oticavidarj</span>
                    </div>
                </div>
            </div>
        </section>
    )
}