const { readFileSync, writeFileSync } = require('fs');
const path = require('path');


/**
 * @desc get all data
 * @name GET /api/v1/user
 * @access public
 */
const getAllUser = (req, res) => {

    // get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // send success
    res.status(200).json(users);

};




/**
 * @desc create a new user
 * @name POST /api/v1/user
 * @access public
 */
 const createUser = (req, res) => {
    
    // get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // get body data 
    const { name, skill } = req.body;

    // validation 
    if ( !name || !skill ) {
        res.status(400).json({
            message : "Name & Skill is required"
        });
    } else {

        users.push({
            id : Math.floor(Math.random() * 10000000000).toString(),
            name : name,
            skill : skill
        });

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        
        res.status(201).json({
            message : "user create successfull"
        });

    }
};




/**
 * @desc get single user 
 * @name GET /api/v1/user/:id
 * @access public
 */
 const singleUser = (req, res) => {
    
    // get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    const singleUser = users.find( data => data.id == req.params.id );

    if (singleUser) {
        res.status(200).json(singleUser);
    } else {
        res.status(404).json({
            message : "Single user data not found"
        });
    }

};




/**
 * @desc delete single user 
 * @name DELETE /api/v1/user/:id
 * @access public
 */
 const deleteUser = (req, res) => {
    
    // get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    if ( users.some( data => data.id == req.params.id ) ) {

        const data = users.filter( data => data.id != req.params.id );
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(data));
        res.status(200).json({
            message : "User delete succcessfull"
        });

    } else {

        res.status(404).json({
            message : "User not found"
        });

    }


};




/**
 * @desc Update User 
 * @name PUT/PATCH /api/v1/user/:id
 * @access public
 */
 const updateUser = (req, res) => {
    
    // get users data from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    if ( users.some( data => data.id == req.params.id ) ) {

        users[users.findIndex( data => data.id == req.params.id )] = {
            ...users[users.findIndex( data => data.id == req.params.id )],
            ...req.body
        }

        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(200).json({
            message : "User update successfull"
        });
        .0

    } else {

        res.status(404).json({
            message : "User not found"
        });

    }


};



// exports
module.exports = {
    getAllUser,
    createUser,
    singleUser,
    deleteUser,
    updateUser
};