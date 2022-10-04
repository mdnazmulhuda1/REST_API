const express = require('express');
const colors = require('colors');
const { urlencoded } = require('body-parser');
const dotenv = require('dotenv').config();
const userRouter = require('./routes/user');



// init environment variable 
const PORT = process.env.PORT || 4000;


// express ionit 
const app = express();


// express middlewares
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));



// routes api 
app.use('/api/v1/user', userRouter);



// listen port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
});