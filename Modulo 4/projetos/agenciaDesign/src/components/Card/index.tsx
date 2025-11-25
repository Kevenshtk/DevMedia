import { Container, CardTop, CardDesc } from "./styles";

export default function Card({ temaEscuro, data, titulo, empresa, descricao }) {
  return (
    <Container dark={temaEscuro}>
      <CardTop>
        <span>{data}</span>
        <h3>{titulo}</h3>
        <small>{empresa}</small>
      </CardTop>
      <CardDesc>
        <p>{descricao}</p>
      </CardDesc>
    </Container>
  );
}
