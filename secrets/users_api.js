const router = require('express').Router()
const { useStore } = require('react-redux');
const { models: { User, Recipe } } = require('../server/database')
const { requireToken, isLoggedInUser } = require('../server/api/gatekeepingMiddleware')

module.exports = router

router.get("/:id", requireToken, async (req, res, next) => {
   try {
      const singleUser = await User.findByPk(req.params.id);
      res.json(singleUser);
   } catch (err) {
      next(err);
   }
});

router.put("/:id", requireToken, async (req, res, next) => {
   try {
      const user = await User.findByPk(req.params.id);
      res.send(await user.update(req.body));
   } catch (err) {
      next(err);
   }
});

router.get("/:id/saved-recipes", requireToken, async (req, res, next) => {
   try {
      const user = await User.findByPk(req.params.id);
      res.json(user.savedRecipeIds)
   } catch (err) {
      next(err);
   }
});

router.get("/:id/favorite-recipes", requireToken, async (req, res, next) => {
   try {
      const user = await User.findByPk(req.params.id);
      res.json(user.favoriteRecipeIds)
   } catch (err) {
      next(err);
   }
});


  