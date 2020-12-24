const Order = require('../models/order');

exports.OrdertDBcontroller = {
    getOrders(req,res){
        Order.find({})
            .then(docs => {res.json(docs)})
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    addOrder(req,res){

    }
}