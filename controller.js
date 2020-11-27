const {users , orders , restaurants} = require('./data');

exports.restaurantController = {
    getRestaurants(req,res){
        console.log('All restaurants data requested!');
        res.json(restaurants);
    },
    addRestaurants(req,res){
        const {body} = req;
        restaurants.push(body);
        console.log('New restaurant entity saved!');
        res.json(restaurants);
    }
};

// exports.userController = {};
// exports.orderController = {};