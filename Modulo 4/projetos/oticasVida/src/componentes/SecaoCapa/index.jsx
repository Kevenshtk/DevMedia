import estilos from "@/componentes/SecaoCapa/SecaoCapa.module.css"

export default function SecaoCapa(){
    return(
        <section className={estilos.secaoCapa}>
            <div className={estilos.containerTexto}>
                <p>Preços baixos em</p>
                <h1>Óculos de gau e de sol</h1>
                <p>Você só encontra aqui</p>
            </div>
        </section>
    )
}