const { Router } = require('express');
const {OrdertDBcontroller} = require('../controllers/order.ctrl');
const orderRouter = new Router();

orderRouter.get('/',OrdertDBcontroller.getOrders);                           //localhostn:3000/api/retaurants
//restaurantRouter.get('/:id',restaurantController.getRestaurant);          //localhostn:3000/api/retaurants/5
//restaurantRouter.post('/',restaurantController.addRestaurants);           //localhostn:3000/api/retaurants
//restaurantRouter.put('/:id',restaurantController.updateRestaurants);      //localhostn:3000/api/retaurants
//restaurantRouter.delete('/:id',restaurantController.deleteRestaurants);   //localhostn:3000/api/retaurants

module.exports = { orderRouter };
