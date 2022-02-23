const mongoose = require("mongoose")
const { model, Schema } = mongoose;

const ordersSchema = new Schema({
   quantity: { require: true, type: Number },
});

const Orders = model('Orders', ordersSchema, "orders");
module.exports = Orders;