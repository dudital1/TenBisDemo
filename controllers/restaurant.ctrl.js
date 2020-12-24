const Restaurant = require('../models/restaurant');

exports.RestaurantDBcontroller = {
    getRestaurants(req, res) {
        Restaurant.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    getRestaurant(req, res) {
        const query = req.query; 
        if(Object.keys(query).length == 0){
            Restaurant.findOne({ id: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting restaurant from db: ${err}`));
        }
        else if(query.name){
            Restaurant.findOne({ name: query.name })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting restaurant from db: ${err}`));
        }
    },
    addRestaurant(req, res) {
        const {body} = req;
        const newRestaurant = new Restaurant(body);
        const result = newRestaurant.save();
        if (result) {
            res.json(newRestaurant)
        } else {
            res.status(404).send("Error saving a restaurant");
        }
    },
    deleteRestaurant(req, res) {
        Restaurant.deleteOne({ id: req.params.id } ) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error deleting restaurant from db: ${err}`));
    },
    updateRestaurant(req, res) {
        const {body} = req;
        Restaurant.updateOne({ id: req.params.id } , body ) 
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error updating restaurant from db: ${err}`));
    },
}