import mongoose from 'mongoose';
const { model, Schema } = mongoose;

const ordersSchema = new Schema({
   quantity: { require: true, type: Number },
});

const Orders = model('Orders', ordersSchema, "orders");
export default Orders
//module.exports = Orders;