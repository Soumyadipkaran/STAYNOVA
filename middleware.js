const Listing = require("./models/listing");
const Review = require("./models/review");
const {listingSchema,reviewSchema} = require("./schema.js");
const ExpressError = require("./utils/ExpressError.js")


module.exports.isLoggedIn = (req, res, next)=>{
    if(!req.isAuthenticated()){
        //redirect originalUrl
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","Please Login First !");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
        delete req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async(req, res, next)=>{
    let {id} = req.params;
    let listing =await Listing.findById(id);

    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You don't have permission to edit");
        return res.redirect(`/listings/${id}`);
    }
    next();
};

module.exports.ValidateListing = (req, res, next) => {
    // Validate request body
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el)=>el.message).join(",");
        return next(new ExpressError(400,errMsg));
    }
    next();
};

module.exports.ValidateReview = (req, res, next) => {
    // Validate request body
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el)=>el.message).join(",");
        return next(new ExpressError(400,errMsg));
    }
    next();
};

module.exports.isReviewAuthor = async(req, res, next)=>{
    let {id, reviewId} = req.params;
    let review = await Review.findById(reviewId);

    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};