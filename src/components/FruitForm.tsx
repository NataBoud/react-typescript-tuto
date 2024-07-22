import { useState } from "react";
import { FruitType } from "./typecsript/FruitType";

interface FruitFormProps {
  handleAdd: (fruitAdd: FruitType) => void;
}

export default function FruitForm({ handleAdd }: FruitFormProps) {

  //state
  const [nouveauFruit, setNouveauFruit] = useState("");
  //comportements
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // console.log(inputRef.current.value);
    const id = new Date().getTime();
    const nom = nouveauFruit;
    const fruitAjouter = { id, nom };
    handleAdd(fruitAjouter);
    setNouveauFruit("");
  };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNouveauFruit(event.target.value);
  };

  //affichage
  return (
      <form action="submit" onSubmit={handleSubmit}>
      <input
        value={nouveauFruit}
              onChange={handleChange}
        type="text"
        placeholder="Ajouter un fruit"
      />
      <button>Ajouter +</button>
    </form>
  );
}
