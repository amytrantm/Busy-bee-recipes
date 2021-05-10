const router = require('express').Router()
module.exports = router



router.use('/recipes', require('./recipes_api'))



router.use((req, res, next) => {
   const error = new Error('Not Found')
   error.status = 404
   next(error)
})