import estilos from './page.module.css';
import Card from '@/componentes/card';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <h1>Minhas mensagens</h1>

      <div>
        <Card>
          <p>Lembra aquele produto que você estava procurando?</p>
          <p>Ele abaixou o preço!! Corre que dá tempo de comprar.</p>
          <a href="https://www.americanas.com.br/1818873801">Ver produto</a>
        </Card>
        <Card>
          <p>Separamos essa foto para você</p>
        </Card>
      </div>
    </div>
  );
}