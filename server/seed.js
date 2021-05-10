"use strict";

const {
   db,
   models: { User, Recipe },
} = require("./database");

const users  = require('../secrets/users')

const recipes = [
   {
      title: "Pork Menudo",
      instructions: "<ol><li>Heat your wok or big kawali. Make sure it's hot before you put oil. Fry the potatoes until half-cooked. Set aside.</li><li>On the same pan, add butter and garlic. Do not burn the garlic.</li><li>Add the pork, tomatoes, onions and bell pepper. Add salt and pepper to taste. You can also add 1 pork cube for a richer flavor. Reduce to low heat. Juices will eventually come out from the vegetables so no need to add water. Cover, stirring occasionally. Simmer until pork is tender or until the liquid has almost dried up leaving a thick sauce.</li><li>Add the liver, cover for about 5 minutes. I'm adding the liver at a later part because we don't want to overcook it. Liver cooks fast and it can be tough if overdone.</li><li>Add the potatoes, carrots, green peas and raisins (and the rest of the ingredients, if any). Simmer for 15 more minutes stirring occasionally.</li><li>Serve with steamed rice.</li></ol>",
      glutenFree: true,
      image: "https://spoonacular.com/recipeImages/656791-556x370.jpg",
      readyInMinutes: 45
   }
]
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */


const seed = async () => {
   try {
      await db.sync({ force: true });

      // seed your database here!
      const newUsers = await Promise.all(
         users.map(user => {
            return User.create(user);
         })
      );

      const newRecipes = await Promise.all(
         recipes.map(recipe => {
            return Recipe.create(recipe);
         })
      );
      await (newUsers[0].addRecipe(newRecipes[0]))
      
   } catch (err) {
      console.log(err);
   }
};

async function runSeed() {
   console.log("seeding...");
   try {
      await seed();
   } catch (err) {
      console.error(err);
      process.exitCode = 1;
   } finally {
      console.log("closing db connection");
      await db.close();
      console.log("db connection closed");
   }
}

if (module === require.main) {
   runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
