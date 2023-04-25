import {NavLink} from "react-router-dom"
import {addFav, removeFav} from "../../redux/actions/actions"
import {connect} from "react-redux"
import { useState, useEffect } from "react";

function Card({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) {
   
   const [isFav, setIsfav] = useState(false)

   const handleFavorites = () => {
      if(isFav){
         setIsfav(false);
         removeFav(id)
      }
      else {
         setIsfav(true);
         addFav({id, name, species, gender, image})
      }
   }    

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsfav(true);
         }
      });
   }, [id, myFavorites]);


   return (
      <div>
         <button onClick={() =>onClose(id)}>X</button>
         <button onClick={handleFavorites}>{isFav ? "❤️" : "🤍"}</button>
         <NavLink to={`/detail/${id}`}>
            <h2>Name: {name}</h2>
         </NavLink>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img src={image} alt='imagen' />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => {dispatch(addFav(character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
   )(Card);
