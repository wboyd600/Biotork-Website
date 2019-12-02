const express = require("express");
const passport = require("passport");
const db = require("../config/database");

const router = express.Router();

//User model
const User = require("../models/user.model");

//Verify - this is for the frontend
router.get("/admin", (req, res) => {
  console.log(
    "This is res.locals.session from /verify" +
      JSON.stringify(res.locals.session)
  );
  console.log("This is req.session from /verify" + JSON.stringify(req.session));
  console.log(
    "This is res.locals.user from /verify" + JSON.stringify(res.locals.user)
  );
  console.log("This is req.user from /verify" + JSON.stringify(req.user));
  if (req.isAuthenticated()) {
    const clientUser = {
      loggedIn: true
    };
    return res.send({
      success: true,
      message: "Valid session",
      user: clientUser
    });
  } else {
    emptyUser = {
      username: "",
      email: "",
      loggedIn: false
    };
    return res.send({
      success: false,
      message: "Couldn't find session",
      user: emptyUser
    });
  }
});


//Login handle
router.post("/admin", passport.authenticate("local"), (req, res) => {
  console.log("This is req.user from /login: " + JSON.stringify(req.user));
  console.log(
    "This is req.session from /login: " + JSON.stringify(req.session)
  );
  //console.log("This is req.body from /login: " + req.body);

  res.locals.user = req.user;
  res.locals.session = req.session;
  const client = {
    loggedIn: true
  };

  return res.send({
    success: true,
    message: "successful login",
    user: req.user
  });
  //Our function defined in passport takes care of ths route
});

//Logout handle
router.post("/logout", (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.send({
        success: false,
        message: "Server error: couldn't destroy session (log user out)"
      });
    }
    req.logout();
    res.clearCookie("sid").send({
      success: true,
      message: "Successfully logged out"
    });
  });
});

module.exports = router;