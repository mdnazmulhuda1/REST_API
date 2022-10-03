const express = require('express');
const colors = require('colors');
const { urlencoded } = require('body-parser');
const dotenv = require('dotenv').config();



// init environment variable 
const PORT = process.env.PORT || 4000;


// express ionit 
const app = express();


// express middlewares
app.use(express.json());
app.use(express.urlencoded( { extended : false } ));



// listen port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.bgGreen.black);
});