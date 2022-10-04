const express = require('express');
const { getAllUser, createUser } = require('../controllers/userController');


// create a router 
const router = express.Router();



// user routes 
router.get('/', getAllUser);
router.post('/', createUser);



// module export 
module.exports = router;