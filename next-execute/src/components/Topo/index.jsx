import { Container, Button, ImgLogo, IconDark, IconLight } from "./Header";
import Logo from "@/../public/logo.png";

export default function Topo(props) {
  return (
    <Container dark={props.temaEscuro}>
      <ImgLogo src={Logo} alt="logo" />
      <Button dark={props.temaEscuro} onClick={props.onClick}>
        {!props.temaEscuro ? <IconDark size={25} /> : <IconLight size={25} />}
      </Button>
    </Container>
  );
}
