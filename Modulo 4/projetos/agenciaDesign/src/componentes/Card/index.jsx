import estilos from "./card.module.css";

export default function Card(props){
    return(
        <div className={!props.temaEscuro ? estilos.cardLight : estilos.cardDark}>
            <div className={estilos.cardTopo}>
                <span>{props.data}</span>
                <h3>{props.titulo}</h3>
                <small>{props.empresa}</small>
            </div>
            <div className={estilos.cardDesc}>
                <p>{props.descricao}</p>
            </div>
        </div>
    );
}