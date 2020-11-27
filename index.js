const express = require("express");
//const logger = require("morgan"); // NOTE: for debugging
const app = express();
const port = process.env.PORT || 3000;
const {orderRouter , restaurantRouter , userRouter} = require("./router");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(logger("dev")); // app.use(logger("combined"));

app.use('/api/restaurants' , restaurantRouter);
// app.use('/api/users' , userRouter);
// app.use('/api/orders' , orderRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
   });

app.listen(port, () => console.log('Express server is running on port ', port));
