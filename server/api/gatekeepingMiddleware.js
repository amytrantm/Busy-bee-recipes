const {
   models: { User },
} = require("../database");

const requireToken = async (req, res, next) => {
   try {

      //console.log('cookies :', req.cookies)
      //result of the console.log('cookies :', req.cookies)
      //use cookies to show result of api request on browser
      //const token = req.cookies.token 
      
      //if not use cookies
      const token = req.headers.authorization;

      const user = await User.findByToken(token);
      req.user = user;
      next();
   } catch (error) {
      next(error);
   }
};


// const isLoggedInUser = (req, res, next) => {
//    if (req.user.id !== Number(req.params.id)) {
//       return res.status(403).send("Please login to correct account.");
//    } else {
//       next();
//    }
// };

module.exports = {
   requireToken,
  // isLoggedInUser,
};
