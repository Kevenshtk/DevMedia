import {
  Container,
  ContainerInfo,
  ContainerSocial,
  ListIcons,
  Icon,
  ContainerCopyright,
} from "./Footer";
import Image from "next/image";
import Logo from "@/../public/logo.png";
import Facebook from "@/../public/facebook.png";
import Twitter from "@/../public/twitter.png";
import Linkedin from "@/../public/linkedin.png";
import Dribble from "@/../public/dribble.png";
import Behance from "@/../public/behance.png";
import Google from "@/../public/google.png";

const iconsSocial = [
  {
    src: Facebook,
    alt: "Logo Facebook",
  },
  {
    src: Twitter,
    alt: "Logo Twitter",
  },
  {
    src: Linkedin,
    alt: "Logo Linkedin",
  },
  {
    src: Dribble,
    alt: "Logo Dribble",
  },
  {
    src: Behance,
    alt: "Logo Behance",
  },
  {
    src: Google,
    alt: "Logo Google",
  },
];

export default function Rodape(props) {
  return (
    <Container dark={props.temaEscuro}>
      <ContainerInfo>
        <Image src={Logo} alt="Logo" />
        <p>
          Ajudamos a criar uma personalidade digital construindo sua marca no
          ambiente online utilizando estratégias, ferramentas e tecnologias
          personalizadas.
        </p>
      </ContainerInfo>
      <ContainerSocial>
        <ListIcons>
          {iconsSocial.map((icon, index) => (
            <li key={index}>
              <Icon src={icon.src} alt={icon.alt} />
            </li>
          ))}
        </ListIcons>
      </ContainerSocial>
      <ContainerCopyright dark={props.temaEscuro}>
        <p>
          Copyright 2024 desenvolvido por <span>Keven</span>
        </p>
      </ContainerCopyright>
    </Container>
  );
}
