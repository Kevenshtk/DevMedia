import Image from "next/image";
import imgSabores from "@/../public/banner-sabores.jpg";
import imgEventos from "@/../public/eventos-image.jpg";
import imgSobre from "@/../public/sobre-image.jpg";
import banner from "@/../public/banner-home.png";

export default function Home() {
  return (
    <main>
      <section className="w-full h-[80vh] bg-[#f9db79] flex items-center justify-center md:h-[100vh]">
        <h1 className="text-[55px] text-white text-center text-shadow-md absolute sm:text-[65px] md:text-[90px]">
          SORVETE ARTESANAL
        </h1>
        <Image
          className="w-[300px] object-cover sm:w-[400px] md:w-[500px]"
          src={banner}
          alt="Imagem banner"
        />
      </section>

      <section className="w-full flex flex-wrap">
        <Image
          className="w-full h-auto md:w-1/2"
          src={imgSabores}
          alt="Imagem Sabores"
        />

        <div className="w-full flex flex-col justify-center items-center gap-[20px] text-center py-[100px] px-[50px] md:w-1/2">
          <h2 className="text-[36px]">NOSSOS SABORES</h2>
          <span className="text-[20px] italic font-bold">
            Novos e deliciosos!
          </span>
          <p className="font-base">
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na
            gelateria todos os nossos produtos são naturais, à base de frutas e
            sem nenhum conservante! Também temos opções sem lactose e sem
            açúcar. Venha conhecer e perceber que tem como o sorvete ser
            delicioso e saudável ao mesmo tempo!
          </p>
        </div>

        <div className="w-full flex flex-col-reverse items-center md:flex-row">
          <div className="w-full flex flex-col justify-center items-center gap-[20px] text-center py-[100px] px-[50px] md:w-1/2">
            <h2 className="text-[36px]">NOSSOS EVENTOS</h2>
            <span className="text-[20px] italic font-bold">
              Delicias com sorvete!
            </span>
            <p className="font-base">
              Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui
              prontinhos para te atender e oferecer os melhores eventos com os
              melhores sorvete da sua vida! Venha nos conhecer e passar um tempo
              aqui com a gente.
            </p>
          </div>
          <Image
            className="w-full h-auto md:w-1/2"
            src={imgEventos}
            alt="Imagem Eventos"
          />
        </div>

        <div className="w-full flex flex-col items-center md:flex-row">
          <Image
            className="w-full h-auto md:w-1/2"
            src={imgSobre}
            alt="Imagem Sobre"
          />
          <div className="w-full flex flex-col justify-center items-center gap-[20px] text-center py-[100px] px-[50px] md:w-1/2">
            <h2 className="text-[36px]">SOBRE NÓS</h2>
            <span className="text-[20px] italic font-bold">
              Alegria em cada casquinha!
            </span>
            <p className="font-base">
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
