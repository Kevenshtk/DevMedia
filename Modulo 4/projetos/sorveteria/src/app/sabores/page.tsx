import Image from "next/image";
import { StaticImageData } from "next/image";

import sabor1 from "@/../public/sabor-oreo.png";
import sabor2 from "@/../public/sabor-pistache.png";
import sabor3 from "@/../public/sabor-cookies-avela.png";
import sabor4 from "@/../public/sabor-kiwi.png";
import sabor5 from "@/../public/sabor-morango.png";
import sabor6 from "@/../public/sabor-limao.png";

type SaboresInfo = {
  title: string;
  description: string;
  img: StaticImageData;
}[];

const saboresInfo: SaboresInfo = [
  {
    title: "Sorvete de Oreo",
    description: "Delicioso sorvete sabor Oreo. Uma explosão de sabor.",
    img: sabor1,
  },
  {
    title: "Sorvete Pistache",
    description: "Cremoso sorvete sabor pistache com pedacinhos de semente.",
    img: sabor2,
  },
  {
    title: "Sorvete Cookies & Avelã",
    description: "O nosso melhor sorvete. Você vai adorar o sabor.",
    img: sabor3,
  },
  {
    title: "Sorvete de Kiwi",
    description:
      "Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.",
    img: sabor4,
  },
  {
    title: "Sorvete de Morango",
    description: "Sorvete de morango gourmet. Tradicional e saboroso.",
    img: sabor5,
  },
  {
    title: "Sorvete de Limão Siciliano",
    description:
      "O incrivel sorvete gourmet de limão siciliano vai te encantar.",
    img: sabor6,
  },
];

export default function pageSabores() {
  return (
    <main>
      <section className="w-full h-[80vh] md:h-[100vh] text-center flex justify-center items-center bg-[url('/banner-sabores.jpg')] bg-cover bg-no-repeat bg-center">
        <h1 className="text-[55px] text-white text-shadow-md sm:text-[65px] md:text-[100px]">
          NOSSOS SABORES
        </h1>
      </section>

      <section className="w-full flex flex-col justify-center items-center gap-[40px] px-[20px] py-[100px]">
        <h2 className="text-[33px]">SABORES DE SORVETE</h2>

        <div className="w-full max-w-[1024px] flex justify-center flex-wrap gap-[20px]">
          {saboresInfo.map((sabor) => {
            return (
              <div className="card-sabores">
                <Image
                  className="img-sabor"
                  src={sabor.img}
                  alt={sabor.title}
                />
                <h3>{sabor.title}</h3>
                <p>{sabor.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
