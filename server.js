// Set dependencies
const express = require("express");

//required dotenv to enable environmental variables
require('dotenv').config()

//Parse incoming req.body and user input
const bodyParser = require('body-parser');

// Sets the express app and port for Heroku
const app = express();
const PORT = process.env.PORT || 3000;

// Requires models for syncing
const db = require("./models");


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Grants access to the static directory and all files within, such as css and js
app.use(express.static("public"));


// Require api routes
// require("./routes/apiRoutes.js")(app);


// Sync models, then start express app
db.sequelize.sync().then(function() {
    
  app.listen(PORT, function() {

    console.log("App listening on PORT " + PORT);
  });

});

