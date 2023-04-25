import { ADD_FAV, REMOVE_FAV, FILTER, ORDER} from "../action-types/action-types"
import axios from "axios"

// ACTION | addFav
export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)

         if (!data.length) throw Error("No hay favoritos")

         return dispatch({
            type: ADD_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }  
    };
 };
 

 export const removeFav = (id) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint);

         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         });
      } catch (error) {
         console.log(error.message);
      }
       
    };
 };

 