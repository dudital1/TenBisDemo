const { Router } = require('express');
const {UserDBcontroller} = require('../controllers/user.ctrl');

const userRouter = new Router();

userRouter.get('/',UserDBcontroller.getUsers);                              //localhostn:3000/api/retaurants
//restaurantRouter.get('/:id',restaurantController.getRestaurant);          //localhostn:3000/api/retaurants/5
//restaurantRouter.post('/',restaurantController.addRestaurants);           //localhostn:3000/api/retaurants
//restaurantRouter.put('/:id',restaurantController.updateRestaurants);      //localhostn:3000/api/retaurants
//restaurantRouter.delete('/:id',restaurantController.deleteRestaurants);   //localhostn:3000/api/retaurants

module.exports = { userRouter };