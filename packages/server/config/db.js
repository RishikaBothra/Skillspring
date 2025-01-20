const mongoose = require('mongoose');
const config = require('./config');

async function connectDB(){
    try{
        await mongoose.connect(config.Database_url);
        console.log("Connected to the database");
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connectDB;
