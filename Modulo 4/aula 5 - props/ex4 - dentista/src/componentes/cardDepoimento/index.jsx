import cardDepoimento from './cardDepoimento.module.css';

export default function CardDepoimento(props){
    return(
        <div>
            <p>{props.nome}</p>
            <p>{props.depoimento}</p>
        </div>
    );
}