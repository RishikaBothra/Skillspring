const express = require('express');
const userRoutes = require('./routes/user');
const courseRoutes = require('./routes/course');
const adminRoutes = require('./routes/admin');

const app = express();
app.use(express.json());

app.use("/user",userRoutes);
app.use("/course",courseRoutes);
app.use("/admin",adminRoutes);
app.listen(3000); 
