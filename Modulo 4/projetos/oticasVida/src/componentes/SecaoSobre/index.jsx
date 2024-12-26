import Image from "next/image";
import imgLoja from "../../../public/loja.png";
import imgAtendimento from "../../../public/atendimento.png";
import estilos from "@/componentes/SecaoSobre/SecaoSobre.module.css";

export default function SecaoSobre() {
    return (
        <section className={estilos.secaoSobre} id="SecaoSobre">
            <h3>QUEM SOMOS NÓS?</h3>
            <p>Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo. </p>

            <div className={estilos.cards}>
                <div className={estilos.cardImg}>
                    <Image className={estilos.img} src={imgLoja} alt="Imagem loja"/>
                </div>
                <div className={estilos.cardTexto}>
                    <h3>Nossas Filiais</h3>
                    <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                </div>
                <div className={estilos.cardTexto}>
                    <h3>Atendimento flexível</h3>
                    <p>Nossa equipe possui é treinada para te atender</p>
                </div>
                <div className={estilos.cardImg}>
                    <Image className={estilos.img} src={imgAtendimento} alt="Imagem atendimento"/>
                </div>
            </div>
        </section>
    )
}