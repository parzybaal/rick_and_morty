import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import React from 'react';
import axios from "axios"


function App() {
   const [characters, setCharacters] = React.useState([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(characters => characters.id !== Number(id))
      setCharacters(charactersFiltered)
   }

   return (
      <div className='App'>
         <Nav onSearch= {onSearch}/>
         <Cards characters={characters} onClose={onClose}/>
         
      </div>
   );
}

export default App;
