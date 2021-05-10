//this is the access point for all things database related!
const db = require("./db")

const User = require("./models/user_model")
const Recipe = require("./models/recipe_model")
//associations go here!

Recipe.belongsToMany(User, {through: 'User_FavRecipe'});
User.belongsToMany(Recipe, {through: 'User_FavRecipe'});

module.exports = {
   db,
   models: {
      User,
      Recipe
   },
};
