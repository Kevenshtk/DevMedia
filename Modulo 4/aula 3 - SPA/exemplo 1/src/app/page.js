import estilos from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return ( 
      <main className={estilos.main}>
      <div className={estilos.cardContainer}>
        <h1>Página Inicial</h1>
        <p>Essa é a página principal da aplicação React.</p>
        <p>Essa página é gerada automaticamente durante a criação da aplicação.</p>
        <Link href="/novaPagina">Link para a nova página</Link>
      </div>
    </main>
  );
}