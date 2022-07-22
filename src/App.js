import imageRickMorty from './img/rick-morty.png';
import './App.css';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const[characters,setCharacters] = useState(null);

const reqApi= async()=>{
  const api=await fetch("https://rickandmortyapi.com/api/character")
  //console.log(api);
  const characterApi=await api.json();
  console.log(characterApi);  
  setCharacters(characterApi.results);//le pasamos .results del array que sera solo lo que vamos a usar, chequear con console.log results array[20]
}


  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>    
          {characters?(
            <Characters characters={characters} setCharacters={setCharacters}/>
          ):(  
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
        <button onClick={reqApi} className='btn-search'>Buscar Personajes</button>
          </>
           )}
      </header>
    </div>
  );
}

export default App;
