import Oculos1 from "../../../public/oculos01.png";
import Oculos2 from "../../../public/oculos02.png";
import Oculos3 from "../../../public/oculos03.png";
import Oculos4 from "../../../public/oculos04.png";
import Image from "next/image";
import {
  Container,
  Header,
  CardsArea,
  Card,
  ImgWrapper,
  Footer,
} from "./styles";

export default function SectionProducts() {
  return (
    <Container id="SectionProducts">
      <Header>
        <h3>Nossos produtos</h3>
        <p>
          Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
          modelos masculino, feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>
      </Header>
      <CardsArea>
        <Card>
          <h4>Óculos de grau</h4>
          <ImgWrapper>
            <Image src={Oculos1} alt="Imagem Óculos de grau" />
          </ImgWrapper>
          <p>R$ 500,00</p>
        </Card>
        <Card>
          <h4>Óculos transition</h4>
          <ImgWrapper>
            <Image src={Oculos2} alt="Imagem Óculos transition" />
          </ImgWrapper>
          <p>R$ 750,00</p>
        </Card>
        <Card>
          <h4>Óculos de sol</h4>
          <ImgWrapper>
            <Image src={Oculos3} alt="Imagem Óculos de so" />
          </ImgWrapper>
          <p>R$ 700,00</p>
        </Card>
        <Card>
          <h4>Óculos infantil</h4>
          <ImgWrapper>
            <Image src={Oculos4} alt="Imagem Óculos infantil" />
          </ImgWrapper>
          <p>R$ 500,00</p>
        </Card>
      </CardsArea>
      <Footer>
        <h3>Todos os nossos produtos incluem:</h3>
        <ul>
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </Footer>
    </Container>
  );
}
