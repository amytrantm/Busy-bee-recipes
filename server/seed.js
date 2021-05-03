"use strict";

const {
   db,
   models: { User },
} = require("./database");

const users  = require('../secrets/users')
/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */


const seed = async () => {
   try {
      await db.sync({ force: true });

      // seed your database here!
      const newUsers = await Promise.all(
         users.map((user) => {
            return User.create(user);
         })
      );
      
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
