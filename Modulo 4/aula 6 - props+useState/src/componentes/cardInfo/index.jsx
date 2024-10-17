import estilos from "./cardInfo.module.css";

export default function cardInfo(props){
    let animal = "cachorro";
    let infoAnimal = "";

    if(props.tipoAnimal === "cachorro"){
        infoAnimal = "É um mamífero carnívoro da família dos canídeos.";
      } else {
        animal = "gato";
        infoAnimal = "É um mamífero carnívoro da família dos felídeos.";
      }
    
    return(
        <div className={estilos.carInfo}>
            <h3>Informações sobre o {animal}</h3>
            <p>{infoAnimal}</p>
        </div>
    );
}