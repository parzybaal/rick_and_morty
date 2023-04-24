let myFavourites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavourites.push(character)

    return res.status(200).json(myFavourites)
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