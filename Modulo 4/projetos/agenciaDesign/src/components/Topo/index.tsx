import { useContext } from "react";
import { ThemesContext } from "@/contexts/themes";
import { Container, Button, ImgLogo, IconDark, IconLight } from "./styles";
import Logo from "@/../public/logo.png";

export default function Topo() {
  const { temaEscuro, alterarTema } = useContext(ThemesContext);

  return (
    <Container dark={temaEscuro}>
      <ImgLogo src={Logo} alt="logo" />
      <Button dark={temaEscuro} onClick={alterarTema}>
        {!temaEscuro ? <IconDark size={25} /> : <IconLight size={25} />}
      </Button>
    </Container>
  );
}
