import Image from "next/image";
import img1 from "@/../public/sobre-image.jpg";
import img2 from "@/../public/sorveteria.jpg";

export default function pageSobre() {
  return (
    <main>
      <section className="w-full h-[80vh] flex justify-center items-center bg-[url('/banner-sobre.png')] bg-no-repeat bg-cover bg-center repe md:h-[100vh]">
        <h1 className="text-[55px] text-white text-center text-shadow-md sm:text-[65px] md:text-[100px]">
          A GELATERIA
        </h1>
      </section>

      <section className="w-full flex flex-col justify-center">
        <div className="w-full max-w-[1024px] flex flex-col justify-center self-center  gap-[30px] px-[20px] py-[100px]">
          <h3 className="text-[32px] text-center">Sobre Nós</h3>
          <span className="text-[20px] text-center font-bold italic">
            Nós simplesmente amamos sorvete!
          </span>
          <p className="text-base indent-8">
            Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada
            sorvete produzido. Fazemos o melhor sorvete para os nossos clientes
            e gostamos de receber elogios. Estamos operando desde 2009 com as
            melhores matérias-primas para a produção final do sorvete. Vendemos
            tanto para varejo como para atacado.
          </p>
          <p className="text-base indent-8">
            Nossos clientes podem comprar os nossos sorvetes e degustar na nossa
            loja ou levar para sua residência e aproveitar junto com a família.
            Também vendemos para estabelecimentos e criamos eventos como festa
            de aniversário, formaturas e eventos empresariais. Para contratar os
            nossos serviços, basta entrar em contato conosco. Iremos
            proporcionar o melhor atendimento e os melhores produtos para você
            fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
          </p>
        </div>

        <div className="max-w-full flex flex-col md:flex-row">
          <Image
            className="w-full h-auto object-cover md:w-1/2"
            src={img1}
            alt="Imagem pessoas"
          />
          <Image
            className="w-full h-auto object-cover md:w-1/2"
            src={img2}
            alt="Imagem sorveteria"
          />
        </div>
      </section>
    </main>
  );
}
