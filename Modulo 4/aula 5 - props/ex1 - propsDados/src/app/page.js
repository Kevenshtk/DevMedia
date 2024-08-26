import estilos from './page.module.css';
import CardProduto from './componentes/card';

import ImgProduto1 from '/public/hamburguer.jpg';
import ImgProduto2 from '/public/refrigerante.jpg';
import ImgProduto3 from '/public/sorvete.jpg';

export default function Home() {
  return (
    <main className={estilos.container_principal}>
      
      <CardProduto
        imagem={ImgProduto1} nome={'Hamburguer'}
        preco={18} categoria={'Lanche'}
      />
      <CardProduto
        imagem={ImgProduto2} nome={'Coca-cola'}
        preco={7} categoria={'Bebida'}
      />
      <CardProduto
        imagem={ImgProduto3} nome={'Sorvete'}
        preco={12} categoria={'Sobremesa'}
      />
    </main>
  );
}