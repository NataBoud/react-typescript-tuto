import { useState } from "react"

function App() {

  const [prix, setPrix] = useState(7)
  return (
    <div>
      <input 
        type="number" 
        value={prix} 
        onChange={(event) => setPrix(Number(event.target.value))} 
      />
      <h1>{prix * 2} euros</h1>
    </div>

  )
}

export default App

// Tiper une variable de maniere: EXPLICITE & IMPLICITE (à priviigier)

/**
 * En TS, lors de l'INITIALISATION on veux préciser 3 info
 * (précédé d'un marquer) :
 * 1) Le NOM de la variable précédé const / let (DEFINITION)
 * 2) Le TYPE de la variable précédé ":" / let (TYPAGE)
 * 3) La VALEUR de la variable précédé "=" / let (ASSIGNATION)
 * 
 */