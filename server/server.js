//const express = require('./config/express.js')
const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");


const users = require("./routes/user.route");
const app = express()

// Bodyparser middleware
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
  // DB Config
  const db = require("./config/keys").MongoURI;
  // Connect to MongoDB
  mongoose
    .connect(
      db,
      { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));


    // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/route/user.route", users);

//update
// Use env port or default
const port = process.env.PORT || 5000;
app.listen(port, () =>{ 
    console.log(`Server now running on port ${port}!`)
});
