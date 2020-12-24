const { Router } = require('express');
const { orderController , userController , restaurantController } = require('./controller' );
const {RestaurantDBcontroller} = require('./controllers/restaurant.ctrl');

const restaurantRouter = new Router();
const userRouter = new Router();
const orderRouter = new Router();

restaurantRouter.get('/',RestaurantDBcontroller.getRestaurants); //localhostn:3000/api/retaurants
//restaurantRouter.get('/:id',restaurantController.getRestaurant); //localhostn:3000/api/retaurants/5
//restaurantRouter.post('/',restaurantController.addRestaurants); //localhostn:3000/api/retaurants
//restaurantRouter.put('/:id',restaurantController.updateRestaurants); //localhostn:3000/api/retaurants
//restaurantRouter.delete('/:id',restaurantController.deleteRestaurants); //localhostn:3000/api/retaurants

module.exports = { restaurantRouter };
