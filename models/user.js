const { Schema, model } = require('mongoose');

const historySchema = new Schema({
    orderId: { type: Number },
    date: { type: Date }
});


const userSchema = new Schema({
    id: { type: Number },
    firstName: { type: String } ,
    dishlastNameId: { type: String } ,
    email: { type: String } ,
    balance: { type: Number } ,
    history: [historySchema]
}, { collection: 'users'});

const User = model('users', userSchema);

module.exports = User;











