const express = require('express');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');
const adminRoutes = require('./routes/admin');
const config = require('./config/config');
const connectDB = require('./config/db');

const app = express();
app.use(express.json());

app.use("/user", userRoutes);
app.use("/course", courseRoutes);
app.use("/admin", adminRoutes);

async function startserver(){
    try{
        await connectDB();
        app.listen(config.port, () => {
            console.log('Server is running on port',config.port);
        });
    }
    catch(err){
        console.error(err);
    }
}

startserver();
