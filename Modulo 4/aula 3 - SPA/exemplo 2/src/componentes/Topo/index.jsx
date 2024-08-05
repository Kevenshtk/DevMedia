import estilos from './Topo.module.css';
import Link from 'next/link';

export default function Topo() {
  return (
    <header className={estilos.container_topo}>
      <h1>Navegação React</h1>
      <nav>
        <Link className={estilos.linkFront} href="/frontend">Front-end</Link>
        <Link className={estilos.linkBack} href="/backend">Back-end</Link>
        <Link className={estilos.linkMobile} href="/mobile">Mobile</Link>
      </nav>
    </header>
  );
}