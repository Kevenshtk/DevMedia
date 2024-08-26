export default function Card(props){
    return(
        <div>
            <h2>Mensagem</h2>
            <div>
                {props.children}
            </div>
        </div>
    );
}