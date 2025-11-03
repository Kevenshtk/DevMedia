import { Container, CardTop, CardDesc } from "./Card"

export default function Card(props) {
  return (
    <Container dark={props.temaEscuro}>
      <CardTop>
        <span>{props.data}</span>
        <h3>{props.titulo}</h3>
        <small>{props.empresa}</small>
      </CardTop>
      <CardDesc>
        <p>{props.descricao}</p>
      </CardDesc>
    </Container>
  );
}
