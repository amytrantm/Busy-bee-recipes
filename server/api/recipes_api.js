const router = require('express').Router()
const { models: { Recipe } } = require('../database')


module.exports = router

router.get("/:id",  async (req, res, next) => {
   try {
      const recipe = await Recipe.findByPk(req.params.id);
      if (recipe){
         const parsedIngredients = recipe.extendedIngredients.map(ingredient => JSON.parse(ingredient));

         res.send({ ...recipe.dataValues, extendedIngredients: parsedIngredients });
      } else {
         res.sendStatus(404)
      }
      
   } catch (err) {
      next(err);
   }
});

router.post("/",  async (req, res, next) => {
   try {
      //send string to database
      const extendedIngredients = req.body.extendedIngredients.map(ingredient => JSON.stringify(ingredient));
      
      const recipe = await Recipe.create({ ...req.body, extendedIngredients })

      const parsedIngredients = recipe.extendedIngredients.map(ingredient => JSON.parse(ingredient));
      
      res.send({ ...recipe.dataValues, extendedIngredients: parsedIngredients });
   } catch (err) {
      next(err);
   }
});

