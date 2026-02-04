import Image from "next/image";
import Logo from "@/../public/logo.png";

export default function Rodape() {
  return (
    <footer className="w-full flex flex-col justify-center items-center gap-[16px] bg-black text-white">
      <div className="w-full max-w-[1024px] flex flex-col justify-around items-center gap-[30px] text-center px-[20px] py-[100px] md:flex-row md:text-left">
        <Image className="w-[100px] h-[100px]" src={Logo} alt="Imagem logo" />
        <div className="w-full h-auto md:w-[20%] md:h-[100px]">
          <h3 className="text-lg">ENDEREÇO</h3>
          <p>Av. Bernardino de Campos, 98</p>
          <p>São Paulo, SP 12345-678</p>
        </div>
        <div className="w-full h-auto md:w-[20%] md:h-[100px]">
          <h3 className="text-lg">CONTATO</h3>
          <p>info@meusite.com</p>
          <p>Tel: (11) 3456-7890</p>
        </div>
        <div className="w-full h-auto md:w-[20%] md:h-[100px]">
          <h3 className="text-lg">HORÁRIOS</h3>
          <p>ABERTO TODOS OS DIAS</p>
          <p>10:00 - 22:00</p>
        </div>
      </div>

      <p className="w-full p-[20px] text-center">
        Gelateria. desenvolvido por Keven
      </p>
    </footer>
  );
}
