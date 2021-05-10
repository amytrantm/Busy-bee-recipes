const router = require('express').Router()
const { useReducer } = require('react');

const { models: { User, Recipe } } = require('../database')
module.exports = router

router.post('/login', async (req, res, next) => {
   try {
      res.send({ token: await User.authenticate(req.body) });
   } catch (err) {
      next(err)
   }
})


router.post('/signup', async (req, res, next) => {
   try {
      const user = await User.create(req.body)
      res.send({ token: await user.generateToken() })
   } catch (err) {
      if (err.name === 'SequelizeUniqueConstraintError') {
         res.status(401).send('User already exists')
      } else {
         next(err)
      }
   }
})

router.get('/getMe', async (req, res, next) => {
   try {
      const user = await User.findByToken(req.headers.authorization)
      const favoriteRecipes = await user.getRecipes()
      res.json({
         ...user.dataValues,
         favoriteRecipes
      });
   } catch (ex) {
      next(ex)
   }
})


router.put('/:userId/add-recipe-to-favorites', async (req, res, next) => {
   try {
      const user = await User.findByPk(req.params.userId,{
         include: [Recipe]
      });

      const recipe = await Recipe.findByPk(req.body.recipeId);

      await user.addRecipe(recipe)
      const favoriteRecipes = await user.getRecipes()

      res.json({
         ...user.dataValues,
         favoriteRecipes
      });

   } catch (error) {
      next(error)
   }
})

//remove 
router.put('/:userId/remove-from-favorites', async (req, res, next) => {
   try {
      const user = await User.findByPk(req.params.userId, {
         include: [Recipe]
      });

      const recipe = await Recipe.findByPk(req.body.recipeId);

      await user.removeRecipe(recipe)
      const favoriteRecipes = await user.getRecipes()

      res.json({
         ...user.dataValues,
         favoriteRecipes
      });

   } catch (error) {
      next(error)
   }
})