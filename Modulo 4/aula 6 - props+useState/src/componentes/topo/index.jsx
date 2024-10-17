import estilos from "./topo.module.css";

export default function Topo(props){
    return(
        <header className={estilos.topo}>
            <h1>Projeto Props + useState</h1>
            <p>Clique no botão para mudar os componentes abaixo</p>
            <button onClick={props.funcaoBotao}>Mudar Animal</button>
      </header>
    );
}