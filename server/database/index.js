//this is the access point for all things database related!
const db = require("./db")

const User = require("./models/user_model")

//associations go here!
// Recipe.belongsToMany(User);
// User.hasMany(Recipe);


module.exports = {
   db,
   models: {
      User,
      //Recipe
   },
};
