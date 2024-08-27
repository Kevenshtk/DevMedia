import estilos from './page.module.css';
import Topo from '@/componentes/Topo';
import CardDepoimento from '@/componentes/cardDepoimento';
import CardInfo from '@/componentes/cardInformacao';
import Rodape from '@/componentes/Rodape';

export default function Home() {
  return (
    <div>
     <Topo/>

     <section>
      <h1>Os melhores <span>aparelhos dentários</span>!</h1>
      <p>Confira abaixo todas as especialidades odontológicas que temos à sua disposição! </p>
      
      <ul>
        <li>
          <img src="../../public/dente.png" alt='Icone'/>
          <p>Pré-avaliação</p>
        </li>

        <li>
          <img src="../../public/dente.png" alt='Icone'/>
          <p>Aparelhos Dentários</p>
        </li>

        <li>
          <img src="../../public/dente.png" alt='Icone'/>
          <p>Raio-X digital</p>
        </li>

        <li>
          <img src="../../public/dente.png" alt='Icone'/>
          <p>Clareamento dental</p>
        </li>
      </ul>
     </section>

     <section>
      <h3>Por que usar <b>aparelho</b>?</h3>
      <img src="../../public/aparelho.png" alt='Imagem do uso de um aparelho'/>

      <ul>
        <li>
          <h3>Dentes alinhados</h3>
          <p>Dentes desalinhados causam problemas nos dentes podem afetar a digestão dos alimentos e a respiração.</p>
        </li>

        <li>
          <h3>Melhora a dicção e a higiene dentária</h3>
          <p>Muitas pessoas não conseguem nem usar fio dental devido à posição da sua dentição. Contudo, a correção possibilita o cuidado com a saúde bucal de forma bem mais ampla.</p>
        </li>

        <li>
          <h3>Corrige espaço entre os dentes</h3>
          <p>Uma dentição desalinhada e com espaços significativos incomodam muitas pessoas. Usar aparelho nos dentes é uma das formas mais eficientes para que esses problemas possam ser corrigidos.</p>
        </li>
      </ul>
     </section>

     <section>
      <h2>Veja o que nossos <b>clientes</b> estão falando...</h2>
      <div>
        <CardDepoimento nome="Alberto" depoimento="Usei aparelho por 2 anos e agora posso sorrir novamente"/>
        <CardDepoimento nome="Eliana" depoimento="Meus dentes eram espaçados e depois de 1 ano estão no lugar certo."/>
        <CardDepoimento nome="Carla" depoimento="Começei a usar ano passado e já estou notando a diferença"/>
     </div>
    </section>

     <section>
      <div>
       <CardInfo>
        <div>
          <ul>
            <li>Segunda - 09:00 às 18:00</li>
            <li>Terça - 09:00 às 18:00</li>
            <li>Quarta - 09:00 às 18:00</li>
            <li>Quinta - 09:00 às 18:00</li>
            <li>Sexta - 09:00 às 17:00</li>
            <li>Sábado - 09:00 às 12:00</li>
          </ul>
        </div>
       </CardInfo>
       <CardInfo>
        <ul>
          <li>
          <img src='' alt=''/>
          <p>Dra. Ana - Ortodontista</p>
          <p>Segundas e Sextas</p>
          </li>
          <li>
          <img src='' alt=''/>
          <p>Dr. Carlos - Endodontia</p>
          <p>Terças e Quartas</p>
          </li>
        </ul>
       </CardInfo>
       <CardInfo>
          <div>
            <p>Ligue para agendar uma consulta:</p>
            <p>(21) 3699 - 9999</p>
            <p>(21) 97785 - 5566</p>
          </div>
       </CardInfo>
      </div>
     </section>  

     <section>
     <h3>Onde estamos<b>localizados?</b></h3>
     <p>Av. Ayrton Senna, 3000 - Barra da Tijuca, Rio de Janeiro - RJ. CEP: 22775-904</p>
     <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29385.675969309108!2d-43.384802570898614!3d-22.979322563917293!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2c2293fa63%3A0x539cb07246f0e38d!2sVia%20Parque%20Shopping!5e0!3m2!1spt-BR!2sbr!4v1611596986401!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"></iframe>
     </section>

     <Rodape/>
    </div>
  );
}