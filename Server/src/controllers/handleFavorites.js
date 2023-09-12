let myFavorites = [];

const postFav = (req, res) => {
    const character = req.body;

    myFavorites.push(character)

    return res.json(myFavorites);
};

const deleteFav = (req, res) => {
    const { id } = req.params
    console.log(myFavorites)
    myFavorites = myFavorites.filter((character) => character.id !== Number(id));
    console.log(myFavorites)
    return res.json(myFavorites);
};


module.exports = {
    postFav,
    deleteFav
};
