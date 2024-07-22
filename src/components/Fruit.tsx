import { FruitType } from "./typecsript/FruitType";

type ColorOption = "red" | "blue" | "green" | "yellow";
 
interface FruitProps {
    fruitInfo: FruitType;
    onClick: () => void;
    backgroundColor?: ColorOption;
}

export default function Fruit({ fruitInfo, onClick, backgroundColor, }: FruitProps) {
   //state

    // const fruitInfo = props.fruitInfo;  
    // const onFruitDelete = props.onFruitDelete;
    // const { fruitInfo, onFruitDelete} = props
   
   //comportements

   //affichage
    return <li>
        {fruitInfo.nom}
        <button style={{ background: backgroundColor }} onClick={onClick}>x</button>
    </li>
}