import './App.css';
import Cards from './components/Cards/Cards';
import Nav from './components/Nav/Nav';
import {useState, useEffect} from 'react';
import axios from "axios"
import {Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import About from "./components/About/About"
import Detail from "./components/Detail/Detail"
import Form from './components/Form/Login';

/* const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY = "547c8e7fa45e.e6fe7fed104f1e6efe18"; */
const email = "juan@gmail.com"
const password = "1503anashe"


function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false)

   /* const login = (userData) => {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(access);
         access && navigate('/home');
      });
   } */
   const login = (userData) => {
      if (userData.email === email && userData.password === password) {
         setAccess(true)
         navigate("/home")
      }
   }
   
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
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
         {
            location.pathname !== "/" && <Nav onSearch= {onSearch}/>
         } 

         <Routes>
         <Route path='/' element={<Form login={login}/>} />

         <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>}/>

         <Route path="/about" element={<About/>}/>

         <Route path="/detail/:id" element={<Detail/>}/>
         </Routes>
      </div>
   );
}

export default App;
