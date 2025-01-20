const dotenv = require('dotenv');
dotenv.config();

const config = {
    Database_url: process.env.DATABASE_URL,
    port: process.env.PORT,
};

module.exports=config;
