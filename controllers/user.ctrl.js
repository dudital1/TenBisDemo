const User = require('../models/user');

exports.UserDBcontroller = {
    getUsers(req,res){
        User.find({})
            .then(docs => {res.json(docs)})
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    addUser(req,res){

    }
}