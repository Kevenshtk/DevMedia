import { FaMapMarkerAlt } from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineContacts,
  AiFillFacebook,
  AiFillTwitterSquare,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Container, ContainerContent } from "./styles";

export default function SectionContact() {
  return (
    <Container id="SectionContact">
      <h3>Fale conosco</h3>
      <p>
        Não perca tempo, venha conhecer uma de nossas lojas ou entre em contato
        através de nossas redes sociais ou da central de atendimento.
      </p>
      <ContainerContent>
        <div className="content">
          <h4>Nossos Contato</h4>
          <div>
            <FaMapMarkerAlt />
            <span>Nova Iguaçu, RJ</span>
          </div>
          <div>
            <AiOutlineContacts />
            <span>(21) 9999-9999</span>
          </div>
          <div>
            <AiOutlineMail />
            <span>contato@oticavida.com</span>
          </div>
        </div>
        <div className="content">
          <h4>Nossas Redes Sociais</h4>
          <div>
            <AiFillFacebook />
            <span>/OticaVida</span>
          </div>
          <div>
            <AiOutlineInstagram />
            <span>@oticavidarj</span>
          </div>
          <div>
            <AiFillTwitterSquare />
            <span>@oticavidarj</span>
          </div>
        </div>
      </ContainerContent>
    </Container>
  );
}
