const mongoose = require("mongoose")
const { model, Schema } = mongoose;

const ordersSchema = new Schema({
   quantity: { require: true, type: String },
});

const Orders = model('Orders', ordersSchema, "orders");
module.exports = Orders;