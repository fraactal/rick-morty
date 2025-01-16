import imageRick from './img/rick-morty.png';
import './App.css';
import { useState } from "react"
import Characters from './components/Characters';

function App() {

  const [characters, setCharacters] = useState(null);

  // se construye el get asyncrono apra la obtencion de datos
  const reqApi = async () => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json()
    // es el campo que viene de la respuesta del API : info, results
    // Le pasamos el resultado del api al useState 
    setCharacters(characterApi.results)
  };

  //console.log(characters)

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {
          characters ? (
            <Characters characters={characters} setCharacters={setCharacters}/>
          ) : (
             <>
                <img src={imageRick} alt="Rick & Morty" className="img-home"/>
                <button onClick ={reqApi} className="btn-search"> Buscar Personajes</button>
             </> 
          )
        }
      </header>
    </div>
  );
}

export default App;
