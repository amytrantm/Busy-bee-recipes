const Sequelize = require("sequelize");
const db = require("../db");


const Recipe = db.define("recipe", {
   title: {
      type: Sequelize.STRING
   },
   instructions: {
      type: Sequelize.TEXT
   },
   glutenFree: {
      type: Sequelize.BOOLEAN
   },
   image: {
      type: Sequelize.TEXT
   },
   readyInMinutes: {
      type: Sequelize.INTEGER
   }
})

module.exports = Recipe;

