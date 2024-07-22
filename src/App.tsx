import { useState } from "react";
import Fruit from "./components/Fruit";
import FruitForm from "./components/FruitForm";
import { FruitType } from "./components/typecsript/FruitType";

// type FruitType = { id: number; nom: string };
// interface FruitAdd {
//   id: number;
//   nom: string
// }

function App() {
  // state (état, donnees)
  const [fruits, setFruits] = useState<FruitType[]>([
    { id: 1, nom: "Abricot " },
    { id: 2, nom: "Banane " },
    { id: 3, nom: "Pomme " },
  ]);
  const [compteur, setCompteur] = useState(0);
  const [prix, setPrix] = useState(0);
  // const inputRef = useRef()

  // comportement
  const handleDelete = (id: number) => {
    // 1. copie du state
    const fruitsCopy = [...fruits];
    // 2. manipuler le state
    const fruitsCopyUpdated = fruitsCopy.filter((fruit) => fruit.id !== id);
    // 3. modifier le state avec le setter
    setFruits(fruitsCopyUpdated);
  };

  const handleAdd = (fruitAdd: FruitType) => {
    // 1. copie du state
    const fruitsCopy = [...fruits];
    // 2. manipuler le state
    fruitsCopy.push(fruitAdd);
    // 3. modifier le state avec le setter
    setFruits(fruitsCopy);
  };

  // function displayFruitFavory(nomFruit: string) {
  //   alert(`J'aime trop ce fruit: ${nomFruit}`)
  // }

  const handleClick = () => {
    setCompteur(compteur + 1);
  };

  // affichage JSX (render)
  return (
    <div>
      <h1>Liste de fruits</h1>
      <ul>
        {fruits.map((fruit) => (
          <Fruit
            fruitInfo={fruit}
            onClick={() => handleDelete(fruit.id)}
            backgroundColor="green"
            // onClick={() => displayFruitFavory(fruit.nom)}
            key={fruit.id}
          />
        ))}
      </ul>
      <FruitForm handleAdd={handleAdd} />

      <hr />
      <h1>{compteur}</h1>
      <button onClick={handleClick}>Incrémenter</button>
      <hr />
      <input
        type="number"
        value={prix}
        onChange={(event) => setPrix(Number(event.target.value))}
      />
      <h1>{prix * 2} euros</h1>
    </div>
  );
}

export default App;

// Tiper une variable de maniere: EXPLICITE & IMPLICITE (à priviigier)

/**
 * En TS, lors de l'INITIALISATION on veux préciser 3 info
 * (précédé d'un marquer) :
 * 1) Le NOM de la variable précédé const / let (DEFINITION)
 * 2) Le TYPE de la variable précédé ":" / let (TYPAGE)
 * 3) La VALEUR de la variable précédé "=" / let (ASSIGNATION)
 *
 */

//Gestion du formulaire
//1. création du formulaire
//2. soummission (onSubmit / handleSubmit)
//3. collecte du données /// méthode descendante / ascendente (onChange / handleChange)

/**
 * Une SIGNATURE d'une fonction c'est 3 choses :
 * 1) Le NOM de la fonction
 * 2) Le TYPE des valeurs d'entrées de la fonction (i.e. paramètres)
 * 3) Le TYPE des valeurs de sortie de la fonction (i.e. valeur de retour)
 */
