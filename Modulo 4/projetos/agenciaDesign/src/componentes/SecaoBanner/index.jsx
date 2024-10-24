import estilos from "./banner.module.css";

export default function SecaoBanner(){
    return(
        <section className={estilos.secaoBanner}>
            <div className={estilos.containerImg}></div>
            <div  className={estilos.containerInfo}>
                <p>BRANDING / UI / UX / TECNOLOGIA</p>
                <h2>Agência de Branding</h2>
                <span>e design digital</span>
            </div>
        </section>
    );
}