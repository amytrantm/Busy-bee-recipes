const Sequelize = require("sequelize");
const db = require("../db");


const Recipe = db.define("recipe", {
   summary: {
     type: Sequelize.TEXT
   },
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
   },
   sourceUrl: {
      type: Sequelize.TEXT
   },
   extendedIngredients: {
      type: Sequelize.ARRAY(Sequelize.TEXT),
      // get: function () {
      //    return JSON.parse(this.getDataValue('extendedIngredients'));
      // },
      // set: function (val) {
      //    return this.setDataValue('extendedIngredients', JSON.stringify(val));
      // }
   }
})

module.exports = Recipe;

// "{\"id\":11477,\"aisle\":\"Produce\",\"image\":\"zucchini.jpg\",\"consistency\":\"solid\",\"name\":\"zucchini\",\"nameClean\":\"zucchini\",\"original\":\"3 zucchini\",\"originalString\":\"3 zucchini\",\"originalName\":\"zucchini\",\"amount\":3,\"unit\":\"\",\"meta\":[],\"metaInformation\":[],\"measures\":{\"us\":{\"amount\":3,\"unitShort\":\"\",\"unitLong\":\"\"},\"metric\":{\"amount\":3,\"unitShort\":\"\",\"unitLong\":\"\"}}}"