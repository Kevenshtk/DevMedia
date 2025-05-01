import logoImg from "../../../public/logo.png";
import Image from "next/image";
import { Container, LogoWrapper, Nav, Link } from "./styles";

export default function Header() {
  return (
    <Container>
      <LogoWrapper>
        <Image src={logoImg} alt="Logo" />
      </LogoWrapper>
      <Nav>
        <Link href="#SectionProducts">Produtos</Link>
        <Link href="#SectionAbout">Sobre</Link>
        <Link href="#SectionContact">Contato</Link>
      </Nav>
    </Container>
  );
}
