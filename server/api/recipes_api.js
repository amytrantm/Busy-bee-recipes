const router = require('express').Router()
const { models: { Recipe } } = require('../database')


module.exports = router

router.get("/:id",  async (req, res, next) => {
   try {
      const recipe = await Recipe.findByPk(req.params.id);
      if (recipe){
         res.json(recipe);
      } else {
         res.sendStatus(404)
      }
      
   } catch (err) {
      next(err);
   }
});

router.post("/",  async (req, res, next) => {
   try {
      const recipe = await Recipe.create(req.body)
      res.send(recipe);
   } catch (err) {
      next(err);
   }
});

