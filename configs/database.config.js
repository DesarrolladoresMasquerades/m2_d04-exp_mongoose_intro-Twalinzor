const mongoose = require('mongoose');
// CONNECT YOUR APP TO THE MONGODB
mongoose
  //       Atlas link   cats-app-dev is the name of our database
  //            |            |
  .connect(
    "mongodb+srv://Stan:ironhack2022@cluster0.wgkvi.mongodb.net/i-Love-Cats-Not-Like-Marco?retryWrites=true&w=majority"
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
