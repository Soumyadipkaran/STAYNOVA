const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js")
const ExpressError = require("../utils/ExpressError.js")
const {isLoggedIn, isOwner, ValidateListing} = require("../middleware.js")

const listingController = require("../controllers/listings.js");
const multer = require('multer');

const {storage}=require("../cloudConfig.js");
const upload = multer({storage});

//index route
router.get("/",wrapAsync(listingController.index));

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

//create
router.post("/",
    isLoggedIn,
    upload.single("listing[image]"),
    ValidateListing,
    wrapAsync(listingController.postListing)
);

//Edit route
router.get("/:id/edit",isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderEditForm));

//Update
router.put("/:id",
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    ValidateListing,
    wrapAsync(listingController.updateListing));

//Delete route
router.delete("/:id",
    isLoggedIn,isOwner
    ,wrapAsync(listingController.deleteListing));
    
//show route
router.get("/:id",wrapAsync(listingController.showListing));

module.exports = router;