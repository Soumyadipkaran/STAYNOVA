const User = require("../models/user.js");

module.exports.renderSignup = (req, res) => {
    const formData = req.flash("formData")[0] || {};  // Get form data from flash if available
    res.render("signup", { formData });
};

module.exports.signup=async(req, res)=>{
    try{
        let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
        req.flash("success","Welcome to Stay-Nova");
        res.redirect("/listings");
        });  
    }catch(e){
        req.flash("error", e.message);
        res.redirect("/signup");
    }
    
};

module.exports.renderLogin = (req, res)=>{
    res.render("users/login.ejs")
};

module.exports.login = async(req, res) => {
    req.flash("success", "Welcome Back to Stay-Nova");  // Set success flash message
    const redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl); 
};

module.exports.logout = (req, res, next)=>{
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "Logged out")
        res.redirect("/listings");
    })
};