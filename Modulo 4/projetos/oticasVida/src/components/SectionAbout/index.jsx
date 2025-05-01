import Image from "next/image";
import imgLoja from "../../../public/loja.png";
import imgAtendimento from "../../../public/atendimento.png";
import { Container, CardArea, Card } from "./styles";

export default function SectionAbout() {
  return (
    <Container id="SectionAbout">
      <h3>QUEM SOMOS NÓS?</h3>
      <p>
        Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida iniciou
        suas atividades focada no atendimento ao público de renda mais baixa,
        sempre com o objetivo de proporcionar ao cliente bom atendimento,
        qualidade e preço baixo.
      </p>
      <CardArea>
        <Card className="ImgWrapper">
          <Image src={imgLoja} alt="Imagem loja" />
        </Card>
        <Card className="cardTexto">
          <h3>Nossas Filiais</h3>
          <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
        </Card>
        <Card className="cardTexto">
          <h3>Atendimento flexível</h3>
          <p>Nossa equipe possui é treinada para te atender</p>
        </Card>
        <Card className="ImgWrapper">
          <Image src={imgAtendimento} alt="Imagem atendimento" />
        </Card>
      </CardArea>
    </Container>
  );
}
