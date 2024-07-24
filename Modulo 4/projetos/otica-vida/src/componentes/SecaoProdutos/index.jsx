import Image from "next/image";
import Oculos1 from "../../../public/oculos01.png";
import Oculos2 from "../../../public/oculos02.png";
import Oculos3 from "../../../public/oculos03.png";
import Oculos4 from "../../../public/oculos04.png";
import estilos from "@/componentes/SecaoProdutos/SecaoProdutos.module.css"

export default function SecaoProdutos(){
    return(
        <section className={estilos.containerProtutos} id="SecaoProduto">
            <div className={estilos.descricao}>
                <h3>Nossos produtos</h3>
                <p>Trabalhamos com óculos de grau, óculos de sol, lentes transition nos modelos masculino, feminino e infantil.</p>
                <p>Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.</p>
            </div>
            <div className={estilos.cardsProdutos}>
                <div className={estilos.card}>
                    <h4>Óculos de grau</h4>
                    <Image className={estilos.imgProduto} src={Oculos1} alt="Imagem Óculos de grau"/>
                    <p>R$ 500,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos transition</h4>
                    <Image className={estilos.imgProduto} src={Oculos2} alt="Imagem Óculos transition"/>
                    <p>R$ 750,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos de sol</h4>
                    <Image className={estilos.imgProduto} src={Oculos3} alt="Imagem Óculos de so"/>
                    <p>R$ 700,00</p>
                </div>
                <div className={estilos.card}>
                    <h4>Óculos infantil</h4>
                    <Image className={estilos.imgProduto} src={Oculos4} alt="Imagem Óculos infantil"/>
                    <p>R$ 500,00</p>
                </div>
            </div>

            <div className={estilos.descricaoLista}>
                <h3>Todos os nossos produtos incluem:</h3>
                <ul className={estilos.lista}>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamento</li>
                </ul>
            </div>
        </section>
    )
}