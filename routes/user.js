const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const usersController = require("../controllers/users.js"); 


router.get("/signup",(req,res)=>{
    res.render("users/signup.ejs");
})
// In your /signup route to render the signup page
router.get("/signup", usersController.renderSignup);

router.post("/signup",wrapAsync(usersController.signup));

router.get("/login",usersController.renderLogin);

router.post("/login", saveRedirectUrl,//just before the passport cause it clear the session info
    //prebuild passport feature
    passport.authenticate("local", { 
        failureRedirect: '/login', 
        failureFlash: true 
    }), 
    usersController.login
);

router.get("/logout",usersController.logout);

module.exports = router;