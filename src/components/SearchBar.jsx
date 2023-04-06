import React, { useState } from "react";



export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value)
   }

   return (
      <div>
        <input value ={id} type='search' onChange = {handleChange} />
         <button onClick={onSearch}>Agregar</button>
      </div>
   );
}
