import {NavLink} from "react-router-dom"

function Card({id, name, status, species, gender, origin, image, onClose}) {
   return (
      <div>
         <button onClick={() =>onClose(id)}>X</button>
         <NavLink to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </NavLink>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <img src={image} alt='imagen' />
      </div>
   );
}

export default Card;
