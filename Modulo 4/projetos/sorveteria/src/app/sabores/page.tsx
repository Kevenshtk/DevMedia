import Image from "next/image";
import sabor1 from "@/../public/sabor-oreo.png";
import sabor2 from "@/../public/sabor-pistache.png";
import sabor3 from "@/../public/sabor-cookies-avela.png";
import sabor4 from "@/../public/sabor-kiwi.png";
import sabor5 from "@/../public/sabor-morango.png";
import sabor6 from "@/../public/sabor-limao.png";
import estilos from "./sabores.module.css";

export default function pageSabores() {
  return (
    <main>
      <section className={estilos.banner}>
        <h1>NOSSOS SABORES</h1>
      </section>

      <section className={estilos.secaoSabores}>
        <h2>SABORES DE SORVETE</h2>

        <div className={estilos.sabores}>
          <div className={estilos.cardSabores}>
            <Image
              className={estilos.imgSabor}
              src={sabor1}
              alt="Imagem sabor oreo"
            />
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>

          <div className={estilos.cardSabores}>
            <Image
              className={estilos.imgSabor}
              src={sabor2}
              alt="Imagem sabor pistache"
            />
            <h3>Sorvete Pistache</h3>
            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
          </div>

          <div className={estilos.cardSabores}>
            <Image
              className={estilos.imgSabor}
              src={sabor3}
              alt="Imagem sabor cookies e avelã"
            />
            <h3>Sorvete Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>

          <div className={estilos.cardSabores}>
            <Image
              className={estilos.imgSabor}
              src={sabor4}
              alt="Imagem sabor kiwi"
            />
            <h3>Sorvete de Kiwi</h3>
            <p>
              Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.
            </p>
          </div>

          <div className={estilos.cardSabores}>
            <Image
              className={estilos.imgSabor}
              src={sabor5}
              alt="Imagem sabor morango"
            />
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>

          <div className={estilos.cardSabores}>
            <Image
              className={estilos.imgSabor}
              src={sabor6}
              alt="Imagem sabor limão"
            />
            <h3>Sorvete de Limão Siciliano</h3>
            <p>
              O incrivel sorvete gourmet de limão siciliano vai te encantar.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
