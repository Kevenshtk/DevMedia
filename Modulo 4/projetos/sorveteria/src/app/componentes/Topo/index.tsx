import Image from "next/image";
import Link from "next/link";
import Logo from "@/../public/logo.png";

export default function Topo() {
  return (
    <header className="w-full flex justify-center bg-[#f9db79] px-[20px]">
      <div className="w-full max-w-[1024px] flex justify-center items-center flex-wrap md:justify-between">
        <Image className="w-[100px] h-[100px]" src={Logo} alt="Imagem Logo" />
        <nav className="w-full flex justify-around items-center gap-[40px] py-[20px] border-t border-[#6969695e] md:border-none md:w-auto">
          <Link className="link-header" href="/">
            Home
          </Link>
          <Link className="link-header" href="/sabores">
            Sabores
          </Link>
          <Link className="link-header" href="/sobre">
            Sobre
          </Link>
        </nav>
      </div>
    </header>
  );
}
