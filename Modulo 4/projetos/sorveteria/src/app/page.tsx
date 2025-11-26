import Image from "next/image";
import imgSabores from "@/../public/banner-sabores.jpg";
import imgEventos from "@/../public/eventos-image.jpg";
import imgSobre from "@/../public/sobre-image.jpg";
import banner from "@/../public/banner-home.png";
import estilos from "./page.module.css";

export default function Home() {
  return (
    <main>
      <section className={estilos.banner}>
        <h1>SORVETE ARTESANAL</h1>
        <Image className={estilos.imgBanner} src={banner} alt="Imagem banner" />
      </section>

      <section className={estilos.conteudo}>
        <Image className={estilos.img} src={imgSabores} alt="Imagem Sabores" />

        <div className={estilos.sabores}>
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos!</span>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais, à base de frutas e
            sem nenhum conservante! Também temos opções sem lactose e sem
            açúcar. Venha conhecer e perceber que tem como o sorvete ser
            delicioso e saudável ao mesmo tempo!
          </p>
        </div>

        <div className={estilos.eventos}>
          <div>
            <h2>NOSSOS EVENTOS</h2>
            <span>Delicias com sorvete!</span>
            <p>
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
              aqui com a gente.
            </p>
          </div>
          <Image
            className={estilos.img}
            src={imgEventos}
            alt="Imagem Eventos"
          />
        </div>

        <div className={estilos.sobre}>
          <Image className={estilos.img} src={imgSobre} alt="Imagem Sobre" />
          <div>
            <h2>SOBRE NÓS</h2>
            <span>Alegria em cada casquinha!</span>
            <p>
              Venha tomar o melhor sorvete da região aqui com a gente! Nós
              estamos há anos no mercado produzindo o que tem de melhor para o
              nosso cliente e você não pode ficar fora dessa. Venha nos fazer
              uma visita e aproveite o melhor atendimento e o melhor sorvete da
              cidade.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
