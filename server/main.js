const PORT = process.env.PORT || 8080
const server = require('./app')


const init = async () => {
   try {
      
      server.listen(PORT, () => console.log(`
         Listening on port ${PORT}
         http://localhost:${PORT}/
      `));
   } catch (err) {
      console.log(`There was an error starting up!`, err);
   }
}

init()
