let myFavourites = [];

const postFav = (req, res) => {
    try {
        const character = req.body;
        const characterFound = myFavourites.find(fav => fav.id === character.id)

        if (!characterFound) throw Error("El personaje ya existe en favoritos")

        myFavourites.push(character)
            
        return res.status(200).json(myFavourites)
          
    } catch (error) {
        return res.status(404).send(error.message)
    }
    
}

const deleteFav = (req, res) => {
    const {id} = req.params

    myFavourites = myFavourites.filter((favorite) => favorite.id !== id);

    return res.status(200).json(myFavourites);
};

module.exports = {
    postFav,
    deleteFav
}