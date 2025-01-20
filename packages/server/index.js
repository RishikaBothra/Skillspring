const express = require('express');
const userRoutes = require('./routes/user.js');
const courseRoutes = require('./routes/course.js');
const adminRoutes = require('./routes/admin.js');
const config = require('./config/config.js');
const connectDB = require('./config/db.js');

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
