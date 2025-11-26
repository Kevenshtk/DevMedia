import Image from "next/image";
import Logo from "@/../public/logo.png";
import estilos from "./Rodape.module.css";

export default function Rodape() {
  return (
    <footer className={estilos.rodape}>
      <div className={estilos.limitarSecao}>
        <Image className={estilos.logo} src={Logo} alt="Imagem logo" />
        <div className={estilos.info}>
          <h3>ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className={estilos.info}>
          <h3>CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className={estilos.info}>
          <h3>HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>

      <p className={estilos.copyright}>
        Gelateria. Orgulhosamente desenvolvido por Keven
      </p>
    </footer>
  );
}
