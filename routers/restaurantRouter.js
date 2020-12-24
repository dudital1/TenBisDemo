const { Router } = require('express');
const {RestaurantDBcontroller} = require('../controllers/restaurant.ctrl');

const restaurantRouter = new Router();

restaurantRouter.get('/',RestaurantDBcontroller.getRestaurants);            //localhostn:3000/api/retaurants
restaurantRouter.get('/:id',RestaurantDBcontroller.getRestaurant);          //localhostn:3000/api/retaurants/5
restaurantRouter.post('/',RestaurantDBcontroller.addRestaurant);            //localhostn:3000/api/retaurants
restaurantRouter.put('/:id',RestaurantDBcontroller.updateRestaurant);       //localhostn:3000/api/retaurants
restaurantRouter.delete('/:id',RestaurantDBcontroller.deleteRestaurant);    //localhostn:3000/api/retaurants

module.exports = { restaurantRouter };
