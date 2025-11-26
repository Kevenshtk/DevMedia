import Image from "next/image";
import img1 from "@/../public/sobre-image.jpg";
import img2 from "@/../public/sorveteria.jpg";
import estilos from "./sobre.module.css";

export default function pageSobre() {
  return (
    <main>
      <section className={estilos.banner}>
        <h1>A GELATERIA</h1>
      </section>

      <section className={estilos.secaoSobre}>
        <div className={estilos.conteudo}>
          <h3>Sobre Nós</h3>
          <span>Nós simplesmente amamos sorvete!</span>
          <p>
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado.
          </p>
          <p>
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>

        <div className={estilos.secaoImagens}>
          <Image className={estilos.img} src={img1} alt="Imagem pessoas" />
          <Image className={estilos.img} src={img2} alt="Imagem sorveteria" />
        </div>
      </section>
    </main>
  );
}
