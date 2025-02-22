const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/staynova";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
        process.exit(1);
    }
}

const initDB = async () => {
    try {
        await Listing.deleteMany({});
        initData.data=initData.data.map((obj)=>({...obj, owner:"67b4cb615292b7e85254e882"}));
        await Listing.insertMany(initData.data);
        console.log("Data Was Initialized");
    } catch (err) {
        console.error("Error initializing data:", err);
    } finally {
        mongoose.connection.close();
    }
};

async function run() {
    await main();
    await initDB();
}

run();
