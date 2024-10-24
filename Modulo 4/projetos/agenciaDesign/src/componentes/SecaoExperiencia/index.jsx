import estilos from "./experiencia.module.css";
import Card from "@/componentes/Card";

export default function SecaoExperiencia(props){
    return(
        <section className={!props.temaEscuro ? estilos.secaoExperienciaLight : estilos.secaoExperienciaDark}>
            <div className={!props.temaEscuro ? estilos.containerTituloLight : estilos.containerTituloDark}>
                <h2>Experiências De Trabalho</h2>
                <p>Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
                Sites e Marketing Digital, nos empenhamos diariamente para entregar
                resultados que tragam impacto aos nossos clientes.</p>
            </div>
            <div className={estilos.containerCards}>
                <Card 
                temaEscuro={props.temaEscuro}
                data={"JUNHO 2012 - 2016"} 
                titulo={"Web Designer"} 
                empresa={"Pied Piper StartUp."} descricao={"Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"}
                />

                <Card 
                temaEscuro={props.temaEscuro}
                data={"AGOSTO 2016 - 2019"} 
                titulo={"Product Designer"} 
                empresa={"E Corp."} descricao={"Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"}
                />

                <Card 
                temaEscuro={props.temaEscuro}
                data={"FEVEREIRO 2019 - 2021"} 
                titulo={"Digital Consulting"} empresa={"Arasaka Inc."} 
                descricao={"Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"}
                />
            </div>
        </section>
    );
}